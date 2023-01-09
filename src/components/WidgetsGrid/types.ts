import { GridStackWidget } from 'gridstack/dist/types'

export interface GridWidgetType extends GridStackWidget {
  props?: Record<string, any>
}
