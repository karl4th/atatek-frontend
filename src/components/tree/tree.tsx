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
        width: 100%;
        height: 100%;
        min-width: 100vw;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        overflow: hidden;
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
        setDimensions({ width: rect.width, height: rect.height });
        requestAnimationFrame(() => {
          setTranslate({ x: rect.width / 2, y: rect.height / 2 });
        });
      }
    };
    updateCenter();
    window.addEventListener('resize', updateCenter);
    return () => window.removeEventListener('resize', updateCenter);
  }, []);

  const handleNodeClick = async (nodeDatum: TreeNode, evt: React.MouseEvent) => {
    if (!treeContainer.current) return;
    setIsAnimating(true);
    const rect = treeContainer.current.getBoundingClientRect();
    const clickedX = evt.clientX - rect.left;
    const clickedY = evt.clientY - rect.top;
    const from = { ...translate };
    const to = {
      x: rect.width / 2 - clickedX + translate.x,
      y: rect.height / 2 - clickedY + translate.y,
    };
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

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        background: "linear-gradient(135deg, rgba(165,200,108,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        overflow: "hidden"
      }}
      ref={treeContainer}
      className="tree-container"
    >
      {dimensions.width > 0 && treeData && (
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
