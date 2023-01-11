import { GridWidgetType } from '@components/WidgetsGrid/types'
import { DrawerProps } from '@mui/material'

export type DrawerWidgetState = {
  widget: GridWidgetType
  anchor?: DrawerProps['anchor']
}
