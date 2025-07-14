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

const TreeComponent: React.FC<TreeComponentProps> = ({ initialData, orientation }) => {
  const treeContainer = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  const [treeData, setTreeData] = useState<TreeNode>(initialData!);
  const [translate, setTranslate] = useState<Translate>({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  // Глобальные стили для html/body
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
      
      /* Safari specific fixes */
      @supports (-webkit-touch-callout: none) {
        html, body, #__next {
          height: -webkit-fill-available !important;
          min-height: -webkit-fill-available !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  // Центрирование по размерам контейнера
  useEffect(() => {
    const updateCenter = () => {
      if (treeContainer.current) {
        const rect = treeContainer.current.getBoundingClientRect();
        
        // Принудительно используем размеры окна для Safari
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const forceWindowSize = isSafari || rect.height < window.innerHeight * 0.8;
        
        const newDimensions = forceWindowSize 
          ? { width: window.innerWidth, height: window.innerHeight }
          : { width: rect.width, height: rect.height };
          
        const newTranslate = { x: newDimensions.width / 2, y: newDimensions.height / 2 };
        
        console.log('🌳 Tree Positioning Debug:');
        console.log('🔍 Browser detection:', {
          isSafari,
          userAgent: navigator.userAgent,
          forceWindowSize
        });
        console.log('📏 Container dimensions:', {
          rect: { width: rect.width, height: rect.height },
          left: rect.left,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom
        });
        console.log('🖥️ Window dimensions:', {
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          outerWidth: window.outerWidth,
          outerHeight: window.outerHeight
        });
        console.log('📐 Document dimensions:', {
          documentElement: {
            clientWidth: document.documentElement.clientWidth,
            clientHeight: document.documentElement.clientHeight,
            scrollWidth: document.documentElement.scrollWidth,
            scrollHeight: document.documentElement.scrollHeight
          },
          body: {
            clientWidth: document.body.clientWidth,
            clientHeight: document.body.clientHeight,
            scrollWidth: document.body.scrollWidth,
            scrollHeight: document.body.scrollHeight
          }
        });
        console.log('🎯 Final dimensions:', newDimensions);
        console.log('🎯 Calculated center:', newTranslate);
        console.log('🔄 Previous dimensions:', dimensions);
        console.log('🔄 Previous translate:', translate);
        
        setDimensions(newDimensions);
        requestAnimationFrame(() => {
          setTranslate(newTranslate);
          console.log('✅ Applied new translate:', newTranslate);
        });
      } else {
        console.warn('⚠️ Tree container ref is null');
      }
    };
    
    console.log('🚀 Initializing tree positioning...');
    
    // Добавляем задержку для Safari, чтобы стили успели примениться
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      setTimeout(updateCenter, 100);
      setTimeout(updateCenter, 500);
    } else {
      updateCenter();
    }
    
    const handleResize = () => {
      console.log('📱 Window resize detected');
      updateCenter();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    
    console.log('🖱️ Node click debug:');
    console.log('📍 Click coordinates:', { clientX: evt.clientX, clientY: evt.clientY });
    console.log('📦 Container rect:', rect);
    console.log('🎯 Relative click:', { clickedX, clickedY });
    console.log('🔄 Animation from:', from);
    console.log('🎯 Animation to:', to);
    
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
        overflow: "hidden"
      }}
      ref={treeContainer}
      className="tree-container"
    >
      {dimensions.width > 0 && treeData ? (
        <>
          {(() => {
            console.log('🌳 Rendering Tree component with:', {
              dimensions,
              translate,
              orientation,
              dataNodes: treeData.children?.length || 0
            });
            return null;
          })()}
          <Tree
            data={treeData}
            orientation={orientation}
            translate={translate}
            renderCustomNodeElement={(rd3tProps) => (
              <CustomNode {...rd3tProps} nodeDatum={rd3tProps.nodeDatum as unknown as TreeNode} onClick={handleNodeClick} />
            )}
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
          />
        </>
      ) : (
        (() => {
          console.log('⏳ Waiting for dimensions or tree data:', {
            dimensionsWidth: dimensions.width,
            hasTreeData: !!treeData
          });
          return null;
        })()
      )}

      <style jsx>{`
        .tree-container {
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          /* Safari specific fixes */
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
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
        
        /* Safari specific styles */
        @supports (-webkit-touch-callout: none) {
          .tree-container {
            height: -webkit-fill-available !important;
            min-height: -webkit-fill-available !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TreeComponent;
