'use client';

import { useEffect, useRef } from 'react';
import * as go from 'gojs';

interface TreeNode {
  key: string;
  name: string;
  parent_id?: string;
  isExpanded?: boolean;
  live_data?: string;
  info?: boolean;
}

const TreeComponent = () => {
  const diagramRef = useRef<HTMLDivElement>(null);
  const diagramInstance = useRef<go.Diagram | null>(null);

  const rightHandler = async (data: any) => {
    alert(data.name);
  }

  useEffect(() => {
    if (!diagramRef.current) return;

    const $ = go.GraphObject.make;

    const treeData: TreeNode[] = [
      { key: '1', name: 'Алаш', info: true },
      { key: '2', name: 'Ұлы жүз', parent_id: '1', info: true },
      { key: '3', name: 'Орта жүз', parent_id: '1', isExpanded: false},
      { key: '4', name: 'Кіші жүз', parent_id: '1' },
      { key: '5', name: 'Жүзден тыс', parent_id: '1' },
      { key: '6', name: 'Жарты', parent_id: '2', live_data: '2010-2025', info: true },
      { key: '7', name: 'Ұлы жүз 2', parent_id: '2' },
      { key: '8', name: 'Орта жүз 1', parent_id: '3' },
      { key: '9', name: 'Кіші жүз 1', parent_id: '4' },
    ];

    const diagram = new go.Diagram(diagramRef.current, {
      layout: new go.TreeLayout({
        angle: 90,
        nodeSpacing: 30,
        layerSpacing: 50,
        arrangement: go.TreeLayout.ArrangementVertical,
      }),

      model: new go.TreeModel({
        nodeDataArray: treeData,
        nodeKeyProperty: 'key',
        nodeParentKeyProperty: 'parent_id'
      }),

      nodeTemplate: $(
        go.Node,
        'Auto',
        $(
          go.Shape,
          {
            fill: '#a5c86c',
            stroke: '#a5c86c',
            strokeWidth: 2,
            width: 125,
            height: 65,
            geometry: go.Geometry.parse("F M0 18 Q0 0 18 0 L102 0 Q120 0 120 18 L120 47 Q120 65 102 65 L18 65 Q0 65 0 47 Z")
          }
        ),
        $(
          go.Panel,
          'Horizontal',
          {
            margin: 20,
            alignment: go.Spot.Center
          },
          new go.Binding('alignment', 'live_data', (data) => data ? go.Spot.Top : go.Spot.Center),
          $(
            go.TextBlock,
            {
              font: 'bold 16px sans-serif',
              textAlign: 'center',
              stroke: '#ffffff'
            },
            new go.Binding('text', 'name')
          ),
          $(
            go.TextBlock,
            {
              font: 'bold 16px sans-serif',
              stroke: '#ffffff',
              margin: new go.Margin(4, 0, 2, 6),
              cursor: 'pointer'
            },
            new go.Binding('text', 'info', (data) => data === true ? 'ⓘ' : ''),
            {
              click: (e, obj) => {
                e.diagram.clearSelection();
                const node = obj.part;
                if (node && node.data) {
                  rightHandler(node.data);
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
            new go.Binding('text', 'live_data'),
            new go.Binding('visible', 'live_data', (data) => !!data)
        ),

      ),

      linkTemplate: $(
        go.Link,
        {
          selectionAdorned: false,
          routing: go.Link.Normal,
          layerName: 'Background',
          curve: go.Link.Bezier
        },
        $(go.Shape, {
          stroke: '#000000',
          strokeWidth: 2
        })
      )
    });

    // ✅ ПКМ (правый клик) по узлу
    diagram.addDiagramListener('ObjectContextClicked', (e) => {
        e.diagram.clearSelection();
      const part = e.subject.part;
      if (part instanceof go.Node) {
        rightHandler(part.data);
      }
    });

    // Обработка левого клика — раскрытие/сворачивание
    diagram.addDiagramListener('ObjectSingleClicked', (e) => {
        e.diagram.clearSelection();
      const part = e.subject.part;
      if (part instanceof go.Node) {
        // Проверяем, был ли клик по иконке информации
        const clickedObject = e.subject;
        if (clickedObject instanceof go.TextBlock && clickedObject.text === 'ⓘ') {
          return; // Не обрабатываем клик по иконке
        }
        
        const node = part;
        const children = node.findTreeChildrenNodes();

        if (children.count > 0) {
          if (node.isTreeExpanded) {
            collapseNode(node);
          } else {
            expandNode(node);
          }

          diagram.commandHandler.scrollToPart(node);
          diagram.centerRect(node.actualBounds);
        } else {
          diagram.commandHandler.scrollToPart(node);
        }
      }
    });

    diagram.scrollMode = go.Diagram.InfiniteScroll;
    diagram.allowHorizontalScroll = true;
    diagram.allowVerticalScroll = true;

    diagram.animationManager.isEnabled = true;
    diagram.animationManager.duration = 500;
    diagram.animationManager.isInitial = true;
    diagram.animationManager.canStart = () => true;

    diagram.scale = 0.8;

    const expandNode = (node: go.Node) => {
      if (node && node.findTreeChildrenNodes().count > 0) {
        node.expandTree();
      }
    };

    const collapseNode = (node: go.Node) => {
      if (node && node.findTreeChildrenNodes().count > 0) {
        node.collapseTree();
      }
    };

    diagramInstance.current = diagram;

    return () => {
      if (diagramInstance.current) {
        diagramInstance.current.div = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-1 w-full">
        <div className="w-full h-20 bg-white fixed top-0 left-0 z-2"></div>
        <div
            ref={diagramRef}
            className="w-full h-full border border-gray-200 rounded-lg bg-white shadow-sm z-1"
        />
    </div>
  );
};

export default TreeComponent;
