import React from 'react'
import 'gridstack/dist/gridstack.min.css'
import { useRecoilState } from 'recoil'
import { widgetsState } from '@state/widgets.state'
import Grid from '@components/WidgetsGrid/Grid'
import { GridWidgetType } from '@components/WidgetsGrid/types'

const WidgetsGrid: React.FC = () => {
  const [widgets, setWidgets] = useRecoilState(widgetsState)

  const handleAdd = (widget: GridWidgetType) => {
    setWidgets((prev) => {
      const newWidgets = [...prev]
      newWidgets.push(widget)
      return newWidgets
    })
  }

  const handleChange = (widget: GridWidgetType) => {
    setWidgets((prev) => {
      return prev.map((w) => {
        if (w.id === widget.id) {
          return widget
        }
        return w
      })
    })
  }

  const handleDelete = (widget: GridWidgetType) => {
    const filtered = widgets.filter(({ id }) => id !== widget.id)
    setWidgets(filtered)
  }

  return (
    <Grid
      widgets={widgets}
      onAdd={handleAdd}
      onChange={handleChange}
      onDelete={handleDelete}
    />
  )
}

export default WidgetsGrid
