import { atom, selector } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import { GridWidgetType } from '@components/WidgetsGrid/types'
import { EWidgetID } from '@const/widgetName'
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
  HISTORY,
} = EWidgetID

export interface IWidgetLayout extends Layout {
  title: string;
  showHeader?: boolean;
}

const storageWidgets = localStorage.getItem(WidgetsState)
const allWidgets: IWidgetLayout[] = [
  {i: CLOCK, w: 4, h: 3, x: 0, y: 0, title: 'Clock'},
  {i: LAST_BOOKMARKS, w: 2, h: 3, x: 0, y: 0, title: 'Последние закладки'},
  {i: BOOKMARKS_TREE, w: 2, h: 3, x: 0, y: 0, title: 'Все закладки'},
  {i: NOTES, w: 2, h: 3, x: 0, y: 0, title: 'Заметки'},
  {i: NOTES_BUTTON, w: 1, h: 1, x: 0, y: 0, title: 'Заметки'},
  {i: BOOKMARKS_BUTTON, w: 1, h: 1, x: 0, y: 0, title: 'Закладки'},
  {i: LAST_BOOKMARKS_BUTTON, w: 1, h: 1, x: 0, y: 0, title: 'Последние закладки'},
  {i: WEATHER, w: 2, h: 2, x: 0, y: 0, title: 'Погода'},
  {i: CALENDAR, w: 2, h: 2, x: 0, y: 0, title: 'Календарь'},
  {i: HISTORY, w: 2, h: 2, x: 0, y: 0, title: 'История'},
]
const defaultWidgets = [allWidgets[0]]

export const widgetsState = atom<IWidgetLayout[]>({
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
