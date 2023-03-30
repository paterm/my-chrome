import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import { GridWidgetType } from '@components/WidgetsGrid/types'
import { WIDGET_ID } from '@const/widgetName'
import { DrawerWidgetState } from '@components/DrawerWidget/types'
import { Layout } from 'react-grid-layout'

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
  CALENDAR,
} = WIDGET_ID

const storageWidgets = localStorage.getItem(WidgetsState)
const allWidgets: Layout[] = [
  {i: CLOCK, w: 4, h: 3, x: 0, y: 0},
  {i: LAST_BOOKMARKS, w: 2, h: 3, x: 0, y: 0},
  {i: BOOKMARKS_TREE, w: 2, h: 3, x: 0, y: 0},
  {i: NOTES, w: 2, h: 3, x: 0, y: 0},
  {i: NOTES_BUTTON, w: 1, h: 1, x: 0, y: 0},
  {i: BOOKMARKS_BUTTON, w: 1, h: 1, x: 0, y: 0},
  {i: LAST_BOOKMARKS_BUTTON, w: 1, h: 1, x: 0, y: 0},
  {i: WEATHER, w: 2, h: 2, x: 0, y: 0},
  {i: CALENDAR, w: 2, h: 2, x: 0, y: 0},
]
const defaultWidgets = [allWidgets[0]]

export const widgetsState = atom<Layout[]>({
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

export const draggingWidgetState = atom<Layout | null>({
  key: 'draggingWidgetState',
  default: null,
})
