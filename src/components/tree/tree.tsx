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

const TreeComponent: React.FC<TreeComponentProps> = ({ initialData, orientation }: { initialData?: TreeNode; orientation: "vertical" | "horizontal" }) => {
  const treeContainer = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  const [treeData, setTreeData] = useState<TreeNode>(initialData!);
  const [translate, setTranslate] = useState<Translate>({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (treeContainer.current) {
      const { width, height } = treeContainer.current.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 2, y: height / 2 - 100 });
    }
  }, []);

  const handleNodeClick = async (nodeDatum: TreeNode, evt: React.MouseEvent) => {
    if (!treeContainer.current) return;

    // Анимация центрирования
    setIsAnimating(true);
    const bounds = treeContainer.current.getBoundingClientRect();
    const clickedX = evt.clientX - bounds.left;
    const clickedY = evt.clientY - bounds.top;

    const from = { ...translate };
    const to = {
      x: dimensions.width / 2 - clickedX + translate.x,
      y: dimensions.height / 2 - clickedY + translate.y,
    };

    // Используем улучшенную анимацию с более плавным easing
    animateTranslate(
      from, 
      to, 
      800, // Уменьшаем время для быстрой отзывчивости
      setTranslate,
      easingFunctions.easeInOutQuart
    );

    // Быстрее завершаем анимацию
    setTimeout(() => {
      setIsAnimating(false);
    }, 850);

    // Сначала закрываем всех соседних узлов (братьев)
    let updatedTree = closeSiblingNodes(treeData, nodeDatum.id);
    
    // Если были закрыты соседние узлы, обновляем дерево с небольшой задержкой для плавности
    if (updatedTree !== treeData) {
      setTreeData(updatedTree);
      await new Promise(resolve => setTimeout(resolve, 150)); // Небольшая задержка для визуального эффекта
    }
    
    // Логика раскрытия/сворачивания узлов
    if (nodeDatum.children && nodeDatum.children.length > 0) {
      // Сворачиваем узел
      updatedTree = updateNodeById(updatedTree, nodeDatum.id, (node) => ({
        ...node,
        children: [],
      }));
      setTreeData(updatedTree);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.atatek.kz/tree/api/tree/?node_id=${nodeDatum.id}`,
        { withCredentials: true }
      );

      const children = response.data.data.map((item: any) => ({
        ...item,
        children: [],
        hexColor: "#2ecc71",
      }));

      if (children.length === 0) {
        toast.info("Ұрпақтары табылмады");
        return;
      }

      // Разворачиваем узел с новыми детьми
      updatedTree = updateNodeById(updatedTree, nodeDatum.id, (node) => ({
        ...node,
        children,
      }));
      setTreeData(updatedTree);

    } catch (error) {
      console.error("Ошибка при загрузке детей:", error);
      toast.error("Ошибка при загрузке данных");
    }
  };

  return (
    <div 
      style={{ 
        width: "100%", 
        height: "100vh", 
        zIndex: "1",
        background: "linear-gradient(135deg, rgba(165,200,108,0.05) 0%, rgba(255,255,255,0.02) 100%)"
      }} 
      ref={treeContainer} 
      className="fixed top-0 left-0 w-full h-full tree-container"
    >
      {dimensions.width > 0 && (
        <Tree
          data={treeData}
          orientation={orientation}
          translate={translate}
          renderCustomNodeElement={(rd3tProps) => (
            <CustomNode {...rd3tProps} nodeDatum={rd3tProps.nodeDatum as unknown as TreeNode} onClick={handleNodeClick} />
          )}
          pathFunc="step"
          dimensions={{ width: 100, height: 800 }}
          collapsible={false}
          shouldCollapseNeighborNodes={false}
          zoomable={true}
          transitionDuration={1200} // Увеличиваем время анимации
          centeringTransitionDuration={800} // Плавное центрирование
          // Настройки расстояния между узлами
          nodeSize={orientation === "vertical" ? { x: 110, y: 100 } : { x: 140, y: 80 }}
          separation={{ siblings: 1.2, nonSiblings: -1 }}
          // Дополнительные настройки для плавности
          scaleExtent={{ min: 0.3, max: 3 }}
          zoom={0.9}
          enableLegacyTransitions={false}
          // Плавная анимация путей
          pathClassFunc={() => "tree-path"}

        />
      )}
      
      {/* Индикатор загрузки при анимации */}
      {isAnimating && (
        <div 
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(165, 200, 108, 0.9)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: 1000,
            opacity: isAnimating ? 1 : 0,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          🌳 Навигация...
        </div>
      )}
      
      <style jsx>{`
        .tree-container {
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
      `}</style>
    </div>
  );
};

export default TreeComponent;
