import React, { createRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { GridStack, GridStackNode } from 'gridstack'
import 'gridstack/dist/gridstack.min.css'
import s from './Grid.module.scss'
import GridWidgetRenderer from '../GridWidgetRenderer'
import cn from 'classnames'
import { GridWidgetType } from '@components/WidgetsGrid/types'
import { GridStackWidget } from 'gridstack/dist/types'
import { pick } from 'lodash'

const options = {
  acceptWidgets: true,
  float: true,
  // margin: 8,
  minRow: 15, // don't collapse when empty
  column: 12,
  cellHeight: 75,
};

interface GridProps {
  widgets: GridWidgetType[]
  onDelete: (widget: GridWidgetType) => void
  onAdd: (widget: GridWidgetType) => void
  onChange: (widget: GridWidgetType) => void
}

const Grid: React.FC<GridProps> = ({
  widgets,
  onDelete,
  onChange,
  onAdd,
}) => {
  const [grid, setGrid] = useState<GridStack>();
  const refs = useRef<any>({})

  /**
   * Заполняет объект с рефами
   * Загружает Grid API
   */
  useLayoutEffect(() => {
    widgets.forEach(({ id }) => {
      refs.current[id!] = refs.current[id!] || createRef()
    })
    setGrid(GridStack.init(options, '.controlled-grid'));
  }, [])

  /**
   * Заполняет грид виджетами
   */
  useEffect(() => {
    if (!grid) return
    grid.batchUpdate()
    widgets.forEach((widget) => {
      if (refs.current[widget.id!] && refs.current[widget.id!]?.current) {
        grid.removeWidget(refs.current[widget.id!].current, false, false)
      }
      grid.makeWidget(refs.current[widget.id!]?.current)
    })
    GridStack.setupDragIn('.grid-stack-item', { appendTo: 'body', helper: myClone });
    grid.on('dragstop', (event: Event, el: any) => onChange(getWidgetFromNode(el.gridstackNode)))
    grid.on('resizestop', (event: Event, el: any) => onChange(getWidgetFromNode(el.gridstackNode)))
    grid.on('dropped', (event, previousNode, newNode) => {
      if (previousNode) onDelete(getWidgetFromNode(previousNode))
      if (newNode) onAdd(getWidgetFromNode(newNode))
    });
    grid.batchUpdate(false)
  }, [grid, refs.current, widgets])

  const getWidgetFromNode = (node: GridStackNode): GridStackWidget => {
    return pick(node, ['id', 'x', 'y', 'w', 'h', 'maxH', 'maxW'])
  }

  // decide what the dropped item will be - for now just a clone but can be anything
  function myClone(event: any) {
    const { target } = event;
    let component;

    if (target.classList.contains('grid-stack-item')) {
      component = target;
    } else {
      const parent = target.closest('.grid-stack-item')

      if (parent) {
        component = parent
      }
    }

    return component
  }

  return (
    <div className={cn(s.grid, 'grid-stack', 'controlled-grid')}>
      {widgets.map((widget, i) => (
        <GridWidgetRenderer
          key={`${widget.id}-${i}`}
          widget={widget}
          ref={refs.current[widget.id!]}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default Grid
