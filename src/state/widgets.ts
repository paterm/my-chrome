import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import { GridWidgetType } from '@components/WidgetsGrid/types'
import { WIDGET_NAME } from '@const/widgetName'

const { WIDGETS } = LOCAL_STORAGE_KEYS
const {
  CLOCK,
  LAST_BOOKMARKS,
  BOOKMARKS_TREE,
  NOTES,
} = WIDGET_NAME

const storageWidgets = localStorage.getItem(WIDGETS)
const allWidgets: GridWidgetType[] = [
  {id: CLOCK, x: 2, y: 0, w: 2, h: 2},
  {id: LAST_BOOKMARKS, x: 1, y: 1, w: 2, h: 3},
  {id: BOOKMARKS_TREE, x: 1, y: 1, w: 2, h: 3},
  {id: NOTES, x: 1, y: 1, w: 2, h: 3},
]
const defaultWidgets = [allWidgets[0]];

export const widgetsState = atom<GridWidgetType[]>({
  key: 'widgetsState',
  default: storageWidgets ? JSON.parse(storageWidgets) : defaultWidgets,
  effects: [
    ({ onSet }) => {
      onSet((value) => {
        localStorage.setItem(WIDGETS, JSON.stringify(value))
      })
    }
  ]
})

export const allWidgetsState = atom({
  key: 'allWidgetsState',
  default: allWidgets,
})

export const widgetsPanelOpenState = atom({
  key: 'widgetsPanelOpenState',
  default: false,
})
