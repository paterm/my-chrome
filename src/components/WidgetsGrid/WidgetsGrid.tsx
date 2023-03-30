import React from 'react'
import 'gridstack/dist/gridstack.min.css'
import { useRecoilState } from 'recoil'
import { widgetsState } from '@state/widgets.state'
// import Grid from '@components/WidgetsGrid/Grid'
// import NewGrid from '@components/WidgetsGrid/NewGrid/NewGrid'
// import ControlledStack from '@components/WidgetsGrid/ControlledStack'
// import { GridWidgetType } from '@components/WidgetsGrid/types'
import GridLayout from '@components/Grid'
import { Layout } from 'react-grid-layout'

const gridOptions = {
  float: true,
  acceptWidgets: true,
  cellHeight: 100,
}

const WidgetsGrid: React.FC = () => {
  const [widgets, setWidgets] = useRecoilState(widgetsState)

  const handleAdd = (layout: Layout) => {
    // console.log('Add widget', widget);
    // setWidgets((prev) => {
    //   const newWidgets = [...prev]
    //   newWidgets.push(widget)
    //   return newWidgets
    // })
  }

  const handleChange = (layout: Layout[]) => {
    console.log('change layout', layout)
    setWidgets(layout);
  }

  const handleDelete = (layout: Layout) => {
    const filtered = widgets.filter(({ i }) => i !== layout.i)
    setWidgets(filtered)
  }

  console.log('widgets', widgets);
  return (
    <GridLayout
      items={widgets}
      onLayoutChange={handleChange}
    />
  )
}

export default WidgetsGrid
