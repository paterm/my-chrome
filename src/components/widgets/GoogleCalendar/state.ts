import { atom } from 'recoil'
import { Schema$CalendarList, Schema$Events, Schema$Event } from '@components/widgets/GoogleCalendar/types'

export const gCalendarListState = atom<Schema$CalendarList | null>({
  key: 'gCalendarList',
  default: null
})

export const gCalendarEventsState = atom<{[key: string]: Schema$Event[]} | null>({
  key: 'gCalendarEventsState',
  default: null
})
