import { GridWidgetType } from '@components/WidgetsGrid/types'
import { getRecoil } from 'recoil-nexus'
import { allWidgetsState } from '@state/widgets.state'

export const getWidgetByID = (widgetId: GridWidgetType['id']): GridWidgetType | undefined => {
  const allWidgets = getRecoil(allWidgetsState)
  return allWidgets.find(({ i }) => i === widgetId)
}
