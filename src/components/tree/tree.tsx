"use client";

import React, { useRef, useEffect, useState } from "react";
import Tree from "react-d3-tree";
import axios from "axios";
import CustomNode from "./CustomNode";
import { toast } from "sonner";
import { useTree } from "@/contexts/tree-context";

interface TreeNode {
  id: number;
  name: string;
  hexColor?: string;
  birth?: number;
  death?: number;
  info?: boolean;
  children?: TreeNode[];
}

interface TreeComponentProps {
  initialData?: TreeNode;
  orientation: "vertical" | "horizontal";
}

interface Dimensions {
  width: number;
  height: number;
}

interface Translate {
  x: number;
  y: number;
}

// Улучшенные easing функции для более плавной анимации
const easingFunctions = {
  // Очень плавный старт и конец
  easeInOutCubic: (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  
  // Плавный переход (рекомендуется для tree navigation)
  easeInOutQuart: (t: number): number => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  },
  
  // Очень плавный переход
  easeInOutQuint: (t: number): number => {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
  }
};

// Улучшенная функция анимации с поддержкой различных easing
const animateTranslate = (
  from: { x: number; y: number },
  to: { x: number; y: number },
  duration: number = 800,
  onUpdate: (translate: { x: number; y: number }) => void,
  easing: (t: number) => number = easingFunctions.easeInOutQuart
) => {
  const start = performance.now();
  
  console.log('🎬 Animation started:', {
    from,
    to,
    duration,
    startTime: start
  });
  
  // Добавляем небольшую задержку для более плавного старта
  const delay = 50;
  
  const step = (timestamp: number) => {
    const elapsed = timestamp - start;
    
    if (elapsed < delay) {
      requestAnimationFrame(step);
      return;
    }
    
    const adjustedElapsed = elapsed - delay;
    const progress = Math.min(adjustedElapsed / duration, 1);
    const easedProgress = easing(progress);

    const currentX = from.x + (to.x - from.x) * easedProgress;
    const currentY = from.y + (to.y - from.y) * easedProgress;

    onUpdate({ x: currentX, y: currentY });

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      console.log('✅ Animation completed:', { x: currentX, y: currentY });
    }
  };

  requestAnimationFrame(step);
};

// Функция для плавного перехода между состояниями дерева
const animateTreeTransition = (
  onTransition: () => void,
  duration: number = 300
) => {
  const container = document.querySelector('.tree-container');
  if (!container) {
    onTransition();
    return;
  }
  
  // Добавляем класс для анимации
  container.classList.add('transitioning');
  
  // Плавно скрываем
  (container as HTMLElement).style.opacity = '0.7';
  (container as HTMLElement).style.transform = 'scale(0.98)';
  
  setTimeout(() => {
    onTransition();
    
    // Плавно показываем
    (container as HTMLElement).style.opacity = '1';
    (container as HTMLElement).style.transform = 'scale(1)';
    
    setTimeout(() => {
      container.classList.remove('transitioning');
    }, duration);
  }, duration / 2);
};

const updateNodeById = (
  node: TreeNode,
  targetId: number,
  updater: (node: TreeNode) => TreeNode
): TreeNode => {
  if (node.id === targetId) {
    return updater(node);
  }
  if (node.children) {
    return {
      ...node,
      children: node.children.map((child) => updateNodeById(child, targetId, updater)),
    };
  }
  return node;
};

// Функция для поиска родительского узла
const findParentNode = (node: TreeNode, targetId: number): TreeNode | null => {
  if (node.children) {
    for (const child of node.children) {
      if (child.id === targetId) {
        return node;
      }
      const foundParent = findParentNode(child, targetId);
      if (foundParent) {
        return foundParent;
      }
    }
  }
  return null;
};

// Функция для закрытия всех соседних узлов (братьев)
const closeSiblingNodes = (tree: TreeNode, targetId: number): TreeNode => {
  const parentNode = findParentNode(tree, targetId);
  
  if (!parentNode || !parentNode.children) {
    return tree;
  }
  
  // Проверяем, есть ли открытые братья
  const hasOpenSiblings = parentNode.children.some(
    child => child.id !== targetId && child.children && child.children.length > 0
  );
  
  if (!hasOpenSiblings) {
    return tree; // Нет открытых братьев, возвращаем дерево как есть
  }
  
  // Закрываем всех братьев, кроме целевого узла
  const updatedTree = updateNodeById(tree, parentNode.id, (parent) => ({
    ...parent,
    children: parent.children!.map((child) => {
      if (child.id !== targetId && child.children && child.children.length > 0) {
        return {
          ...child,
          children: [], // Закрываем соседние узлы
        };
      }
      return child;
    }),
  }));
  
  return updatedTree;
};

// Универсальная функция для получения размеров экрана
const getScreenDimensions = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  // Для Safari и iOS используем более надежные методы
  if (isSafari || isIOS) {
    // Используем visualViewport если доступен
    if (window.visualViewport) {
      return {
        width: window.visualViewport.width,
        height: window.visualViewport.height
      };
    }
    
    // Fallback для старых версий Safari
    return {
      width: window.innerWidth || document.documentElement.clientWidth || 1440,
      height: window.innerHeight || document.documentElement.clientHeight || 900
    };
  }
  
  // Для других браузеров используем стандартные методы
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

// Универсальная функция для центрирования
const calculateCenterPosition = (dimensions: Dimensions, orientation: string) => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  // Базовые координаты центра
  let centerX = dimensions.width / 2;
  let centerY = dimensions.height / 2;
  
  // Корректировки для Safari и iOS
  if (isSafari || isIOS) {
    // Для вертикальной ориентации на мобильных устройствах
    if (orientation === "vertical" && dimensions.height > dimensions.width) {
      centerY = dimensions.height * 0.4; // Смещаем немного выше
    }
    
    // Для горизонтальной ориентации
    if (orientation === "horizontal") {
      centerX = dimensions.width * 0.45; // Смещаем немного левее
      centerY = dimensions.height * 0.5;
    }
  }
  
  return { x: centerX, y: centerY };
};

const TreeComponent: React.FC<TreeComponentProps> = ({ initialData, orientation }) => {
  const treeContainer = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  const [treeData, setTreeData] = useState<TreeNode>(initialData!);
  const [translate, setTranslate] = useState<Translate>({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Логируем initialData при инициализации
  useEffect(() => {
    const isChrome = /Chrome/.test(navigator.userAgent) && !/Edge/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    console.log('🌱 Initial tree data:', {
      initialData,
      treeData,
      hasInitialData: !!initialData,
      initialDataStructure: JSON.stringify(initialData, null, 2),
      browser: {
        isChrome,
        isSafari,
        userAgent: navigator.userAgent
      }
    });
  }, [initialData]);

  // Исправляем данные дерева для правильного рендеринга
  const getFixedTreeData = (data: TreeNode): TreeNode => {
    // Если у узла нет детей, добавляем фиктивный дочерний узел для правильного рендеринга
    if (!data.children || data.children.length === 0) {
      return {
        ...data,
        children: [{
          id: -1, // Фиктивный ID
          name: "", // Пустое имя
          children: [] // Пустые дети
        }]
      };
    }
    return data;
  };

  // Универсальные стили для всех браузеров
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html, body, #__next {
        width: 100vw !important;
        height: 100vh !important;
        min-width: 100vw !important;
        min-height: 100vh !important;
        max-width: 100vw !important;
        max-height: 100vh !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
      }
      
      /* Safari and iOS specific fixes */
      @supports (-webkit-touch-callout: none) {
        html, body, #__next {
          height: -webkit-fill-available !important;
          min-height: -webkit-fill-available !important;
        }
      }
      
      /* Additional Safari fixes */
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        html, body, #__next {
          height: 100vh !important;
          min-height: 100vh !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  // Универсальная функция инициализации позиционирования
  const initializePositioning = () => {
    if (!treeContainer.current) {
      console.warn('⚠️ Tree container ref is null');
      return;
    }
    
    const screenDimensions = getScreenDimensions();
    const centerPosition = calculateCenterPosition(screenDimensions, orientation);
    
    console.log('🌳 Universal positioning debug:', {
      screenDimensions,
      centerPosition,
      orientation,
      userAgent: navigator.userAgent
    });
    
    setDimensions(screenDimensions);
    setTranslate(centerPosition);
    setIsInitialized(true);
    
    console.log('✅ Position initialized:', centerPosition);
  };

  // Инициализация позиционирования с задержками для разных браузеров
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    console.log('🚀 Initializing universal tree positioning...');
    
    if (isSafari || isIOS) {
      // Для Safari и iOS используем множественные попытки с задержками
      setTimeout(initializePositioning, 100);
      setTimeout(initializePositioning, 300);
      setTimeout(initializePositioning, 500);
      setTimeout(initializePositioning, 1000);
      
      // Дополнительная попытка после полной загрузки
      window.addEventListener('load', () => {
        setTimeout(initializePositioning, 200);
      });
    } else {
      // Для других браузеров достаточно одной попытки
      initializePositioning();
    }
    
    const handleResize = () => {
      console.log('📱 Window resize detected');
      setTimeout(initializePositioning, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [orientation]);

  const handleNodeClick = async (nodeDatum: TreeNode, evt: React.MouseEvent) => {
    if (!treeContainer.current) {
      console.warn('⚠️ Tree container ref is null in handleNodeClick');
      return;
    }
    
    setIsAnimating(true);
    const rect = treeContainer.current.getBoundingClientRect();
    const clickedX = evt.clientX - rect.left;
    const clickedY = evt.clientY - rect.top;
    const from = { ...translate };
    const to = {
      x: rect.width / 2 - clickedX + translate.x,
      y: rect.height / 2 - clickedY + translate.y,
    };
    
    console.log('🖱️ Node click debug:', {
      clickCoordinates: { clientX: evt.clientX, clientY: evt.clientY },
      containerRect: rect,
      relativeClick: { clickedX, clickedY },
      animationFrom: from,
      animationTo: to
    });
    
    animateTranslate(from, to, 500, setTranslate, easingFunctions.easeInOutQuart);
    setTimeout(() => setIsAnimating(false), 500);
    
    let updatedTree = closeSiblingNodes(treeData, nodeDatum.id);
    if (updatedTree !== treeData) {
      setTreeData(updatedTree);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    if (nodeDatum.children && nodeDatum.children.length > 0) {
      updatedTree = updateNodeById(updatedTree, nodeDatum.id, (node) => ({ ...node, children: [] }));
      setTreeData(updatedTree);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.atatek.kz/tree/api/tree/?node_id=${nodeDatum.id}`,
        { withCredentials: true }
      );
      const children = response.data.data.map((item: any) => ({ ...item, children: [], hexColor: "#2ecc71" }));
      if (children.length === 0) {
        toast.info("Ұрпақтары табылмады");
        return;
      }
      updatedTree = updateNodeById(updatedTree, nodeDatum.id, (node) => ({ ...node, children }));
      setTreeData(updatedTree);
    } catch (error) {
      console.error("Ошибка при загрузке детей:", error);
      toast.error("Ошибка при загрузке данных");
    }
  };

  // Логирование состояния компонента при каждом рендере
  console.log('🔄 Tree component render:', {
    dimensions,
    translate,
    isAnimating,
    isInitialized,
    hasTreeData: !!treeData,
    orientation,
    containerRef: !!treeContainer.current
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
        minHeight: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        background: "linear-gradient(135deg, rgba(165,200,108,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      ref={treeContainer}
      className="tree-container"
    >
      {isInitialized && dimensions.width > 0 && treeData ? (
        <>
          {(() => {
            const isChrome = /Chrome/.test(navigator.userAgent) && !/Edge/.test(navigator.userAgent);
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            
            console.log('🌳 Rendering Tree component with:', {
              dimensions,
              translate,
              orientation,
              dataNodes: treeData.children?.length || 0,
              treeDataStructure: JSON.stringify(treeData, null, 2),
              isValidData: treeData && treeData.id && treeData.name,
              browser: {
                isChrome,
                isSafari,
                userAgent: navigator.userAgent
              }
            });
            return null;
          })()}
          <Tree
            data={treeData}
            orientation={orientation}
            translate={translate}
            renderCustomNodeElement={(rd3tProps) => {
              console.log('🎯 CustomNode render props:', {
                nodeDatum: rd3tProps.nodeDatum,
                hierarchyPointNode: rd3tProps.hierarchyPointNode,
                position: rd3tProps.hierarchyPointNode?.x !== undefined ? {
                  x: rd3tProps.hierarchyPointNode.x,
                  y: rd3tProps.hierarchyPointNode.y
                } : 'undefined'
              });
              return (
                <CustomNode 
                  {...rd3tProps} 
                  nodeDatum={rd3tProps.nodeDatum as unknown as TreeNode} 
                  onClick={handleNodeClick} 
                />
              );
            }}
            pathFunc="diagonal"
            dimensions={{ width: 100, height: 800 }}
            collapsible={false}
            shouldCollapseNeighborNodes={false}
            zoomable={true}
            transitionDuration={1200}
            centeringTransitionDuration={500}
            nodeSize={orientation === "vertical" ? { x: 110, y: 100 } : { x: 140, y: 80 }}
            separation={{ siblings: 1.2, nonSiblings: -1 }}
            scaleExtent={{ min: 0.3, max: 3 }}
            zoom={0.9}
            enableLegacyTransitions={true}
            pathClassFunc={() => "tree-path"}
            onUpdate={(target) => {
              console.log('🔄 Tree onUpdate:', { target });
            }}
            onNodeClick={(nodeDatum, evt) => {
              console.log('🖱️ Tree onNodeClick:', { nodeDatum, evt });
            }}
          />
        </>
      ) : (
        (() => {
          console.log('⏳ Waiting for initialization:', {
            isInitialized,
            dimensionsWidth: dimensions.width,
            hasTreeData: !!treeData,
            treeDataValid: treeData && treeData.id && treeData.name
          });
          return null;
        })()
      )}

      <style jsx>{`
        .tree-container {
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          /* Universal browser fixes */
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000px;
          perspective: 1000px;
        }
        .tree-container.transitioning {
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tree-path {
          stroke: #a5c86c;
          stroke-width: 2px;
          fill: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tree-link {
          stroke: #a5c86c;
          stroke-width: 2px;
          fill: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tree-link:hover {
          stroke: #8fb85c;
          stroke-width: 3px;
        }
        
        /* Universal Safari and iOS fixes */
        @supports (-webkit-touch-callout: none) {
          .tree-container {
            height: -webkit-fill-available !important;
            min-height: -webkit-fill-available !important;
          }
        }
        
        /* Additional Safari fixes */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          .tree-container {
            height: 100vh !important;
            min-height: 100vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TreeComponent;
