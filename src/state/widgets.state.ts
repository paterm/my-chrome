import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import { GridWidgetType } from '@components/WidgetsGrid/types'
import { WIDGET_ID } from '@const/widgetName'
import { DrawerWidgetState } from '@components/DrawerWidget/types'

const { WIDGETS: WidgetsState } = LOCAL_STORAGE_KEYS
const {
  CLOCK,
  LAST_BOOKMARKS,
  LAST_BOOKMARKS_BUTTON,
  BOOKMARKS_TREE,
  BOOKMARKS_BUTTON,
  NOTES,
  NOTES_BUTTON,
  WEATHER,
} = WIDGET_ID

const storageWidgets = localStorage.getItem(WidgetsState)
const allWidgets: GridWidgetType[] = [
  {id: CLOCK, x: 2, y: 0, w: 2, h: 2},
  {id: LAST_BOOKMARKS, x: 1, y: 1, w: 2, h: 3},
  {id: BOOKMARKS_TREE, x: 1, y: 1, w: 2, h: 3},
  {id: NOTES, x: 1, y: 1, w: 2, h: 3},
  {id: NOTES_BUTTON, x: 0, y: 0, w: 1, h: 1},
  {id: BOOKMARKS_BUTTON, x: 1, y: 0, w: 1, h: 1},
  {id: LAST_BOOKMARKS_BUTTON, x: 2, y: 0, w: 1, h: 1},
  {id: WEATHER, x: 0, y: 1, w: 2, h: 2},
]
const defaultWidgets = [allWidgets[0]];

export const widgetsState = atom<GridWidgetType[]>({
  key: 'widgetsState',
  default: storageWidgets ? JSON.parse(storageWidgets) : defaultWidgets,
  effects: [
    ({ onSet }) => {
      onSet((value) => {
        localStorage.setItem(WidgetsState, JSON.stringify(value))
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

export const drawerWidgetState = atom<DrawerWidgetState | null>({
  key: 'drawerWidgetState',
  default: null,
})
