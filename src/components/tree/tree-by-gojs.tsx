'use client';
import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import { useTree } from "@/contexts/tree-context";
import { toast } from 'sonner';


// ✅ API-запрос на получение детей
async function fetchChildren(nodeId: number) {
  const response = await fetch(`https://api.atatek.kz/tree/api/tree/dev?node_id=${nodeId}`, {
    headers: {
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    toast.info("Қателік орын алды");
    return [];
  }

  const json = await response.json();
  return json.data;
}

function contextClickManager(nodeId: number, setOpen: (open: boolean) => void, setSelectedPersonId: (id: string) => void) {
  setSelectedPersonId(nodeId.toString());
  setOpen(true);
}

// ✅ Инициализация диаграммы
function initDiagram(type: number, setOpen: (open: boolean) => void, setSelectedPersonId: (id: string) => void) {
  const $ = go.GraphObject.make;

  const diagram = $(go.Diagram, {
    layout: $(go.TreeLayout, {
      angle: type,
      nodeSpacing: 20,
      layerSpacing: 50,
      layerStyle: go.TreeLayout.LayerUniform,
      alignment: go.TreeLayout.AlignmentCenterChildren,
    }),

    scrollMode: go.Diagram.InfiniteScroll,
    allowHorizontalScroll: true,
    allowVerticalScroll: true,
    allowZoom: true,
    allowMove: false,
    minScale: 0.1,
    maxScale: 10,
    scale: 1,
    autoScrollRegion: 1000,
    'toolManager.hoverDelay': 100,


    model: $(go.TreeModel, {
      nodeKeyProperty: 'id',
      nodeParentKeyProperty: 'parent',
    }),
  });

  // ✅ Центрирование узла после layout
  diagram.addDiagramListener('LayoutCompleted', (e) => {
    const nodeId = (diagram as any).currentlyCenteredNodeId;
    if (!nodeId) return;

    const centeredNode = diagram.findNodeForKey(nodeId);
    if (!centeredNode) return;

    const bounds = centeredNode.actualBounds;
    const view = diagram.viewportBounds;
    const scale = diagram.scale;

    const cx = bounds.centerX;
    const cy = bounds.centerY;
    const vx = view.width / 2;
    const vy = view.height / 2;

    const newPos = new go.Point(cx - vx / scale, cy - vy / scale);
    diagram.animationManager.isEnabled = true;
    diagram.animationManager.duration = 1200;
    diagram.position = newPos;

    (diagram as any).currentlyCenteredNodeId = null;
  });

  // ✅ Шаблон узла
  diagram.nodeTemplate = $(
    go.Node,
    'Horizontal',
    {
      click: async (e, node: go.Node) => {
        e.diagram.clearSelection();
        const nodeData = node.data;
        const diagram = node.diagram;

        (diagram as any).currentlyCenteredNodeId = nodeData.id;

        const existingChildren = node.findTreeChildrenNodes();
        if (existingChildren.count > 0) {
          if (node.isTreeExpanded) {
            diagram.commandHandler.collapseTree(node);
          } else {
            diagram.commandHandler.expandTree(node);
          }
          return;
        }

        try {
          const children = await fetchChildren(nodeData.id);
          if (children.length === 0) {
            toast.info("Ұрпақтары табылмады");
            return;
          }
          diagram.startTransaction('add children');

          for (const child of children) {
            if (!diagram.findNodeForKey(child.id)) {
              diagram.model.addNodeData({
                id: child.id,
                name: child.name,
                parent: nodeData.id,
                live: child.live,
                info: child.info,
                untouchable: child.untouchable,
                mini_icon: child.mini_icon,
                main_icon: child.main_icon,
              });
            }
          }

          diagram.commitTransaction('add children');
          diagram.commandHandler.expandTree(node);
        } catch (error) {
          console.error('Ошибка при загрузке детей:', error);
          toast.info("Қателік орын алды");

        }
      },
      contextClick: (e, node: go.Node) => {
        e.diagram.clearSelection();
        const nodeData = node.data;
        contextClickManager(nodeData.id, setOpen, setSelectedPersonId);
      }
    },
    $(
      go.Panel,
      'Auto',
      $(
        go.Shape,
          {
            fill: '#a5c86c',
            stroke: '#a5c86c',
            strokeWidth: 2,
            height: 55,
            geometry: go.Geometry.parse("F M0 18 Q0 0 18 0 L102 0 Q120 0 120 18 L120 47 Q120 65 102 65 L18 65 Q0 65 0 47 Z")
          }
      ),
      $(go.Panel,
        "Horizontal",
        {
          margin: 20,
          alignment: go.Spot.Center
        },
        new go.Binding('alignment', 'live', (data) => data ? go.Spot.Top : go.Spot.Center),
        $(go.TextBlock, { margin: 6, font: 'bold 14px sans-serif', textAlign: 'center', stroke: '#ffffff' }, new go.Binding('text', 'name')),
        $(
          go.TextBlock,
          {
            font: 'bold 14px sans-serif',
            stroke: '#ffffff',
            margin: new go.Margin(4, 0, 2, 6),
            cursor: 'pointer'
          },
          new go.Binding('text', 'info', (data) => data === true ? 'ⓘ' : ''),
          {
            click: (e, obj) => {
              e.diagram.clearSelection();
              e.handled = true;
              const node = obj.part as go.Node;
              if (node && node.data) {
                contextClickManager(node.data.id, setOpen, setSelectedPersonId);
                return true;
              }
              return true; // Предотвращает всплытие события
            }
          }
        )
      ),
      $(
        go.TextBlock,
        {
            margin: 13,
            font: 'bold 11px sans-serif',
            textAlign: 'center',
            stroke: '#ffffff',
            alignment: go.Spot.Bottom
        },
        new go.Binding('text', 'birth'),
        new go.Binding('visible', 'live', (data) => data === true)
    ),
    )
  );

  diagram.linkTemplate = $(
    go.Link,
    {
      routing: go.Link.Normal,
      curve: go.Link.Bezier, // 🔥 тут делаем линии кривыми
      corner: 10
    },
    $(go.Shape, { stroke: '#2c2c2c', strokeWidth: 2 }) // сама линия
  );
  

  return diagram;
}

// ✅ Реакция на изменения модели
function handleModelChange(changes: any) {
  console.log('Model changed', changes);
}



interface TreeByGojsProps {
  type: number;
  initialData: any[];
}

// ✅ Компонент страницы
const TreeByGojs = ({ type, initialData }: TreeByGojsProps) => {
    const { setOpen, setSelectedPersonId } = useTree();
    const diagramRef = useRef<go.Diagram | null>(null);

    useEffect(() => {
        const diagram = diagramRef.current;
        if (!diagram) return;
      
        const layout = diagram.layout as go.TreeLayout;
        layout.angle = type; // 🔁 обновляем угол
        diagram.layoutDiagram(true); // 🔁 пересчитываем layout

        const rootNode = diagram.findNodeForKey(initialData[0]?.id);
        if (rootNode) {
          diagram.animationManager.isEnabled = true;
          diagram.animationManager.duration = 1000;
          diagram.scrollToRect(rootNode.actualBounds);
        }
      
    }, [type]);

    const init = () => {
        const diagram = initDiagram(type, setOpen, setSelectedPersonId);
        diagramRef.current = diagram; // ✅ сохраняем диаграмму
        return diagram;
    };
    return (
        <div className="w-full h-screen fixed top-0 left-0 z-1 w-full">
        <div className="w-full h-20 bg-white fixed top-0 left-0 z-10"></div>
        <ReactDiagram
            initDiagram={init}
            nodeDataArray={initialData}
            onModelChange={handleModelChange}
            divClassName="diagram-component"
        />
        </div>
    );
};

export default TreeByGojs;
