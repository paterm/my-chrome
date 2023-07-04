import React from 'react'
import 'gridstack/dist/gridstack.min.css'
import { useRecoilState } from 'recoil'
import { IWidgetLayout, widgetsState } from '@state/widgets.state'
import GridLayout from '@components/Grid'

const gridOptions = {
  float: true,
  acceptWidgets: true,
  cellHeight: 100,
}

const WidgetsGrid: React.FC = () => {
  const [widgets, setWidgets] = useRecoilState(widgetsState)

  const handleChange = (layout: IWidgetLayout[]) => {
    console.log('layout', layout);
    console.log('change layout', layout)
    setWidgets((prevWidgets) => {
      return layout.map((widget) => {
        let newWidget = {...widget};
        const foundWidget = prevWidgets.find(({i}) => i === newWidget.i);
        if (foundWidget) {
          newWidget = {...foundWidget, ...newWidget};
        }
        return newWidget;
      })
    });
  }

  const handleDelete = (layout: IWidgetLayout) => {
    const filtered = widgets.filter(({ i }) => i !== layout.i)
    setWidgets(filtered)
  }

  return (
    <GridLayout
      items={widgets}
      onLayoutChange={handleChange}
    />
  )
}

export default WidgetsGrid
