import { GOOGLE_API_KEY, GOOGLE_CALENDAR_BASE } from '@const/google.const'
import ApiService from '@services/api.service'
import { calendar, calendarList, eventsList } from './mockup'
import {
  Params$Resource$Events$List,
  Schema$Calendar,
  Schema$CalendarList,
  Schema$Events,
} from '@components/widgets/GoogleCalendar/types'

// API https://developers.google.com/calendar/api/v3/reference/events/list

export default class GoogleCalendarService {
  private api
  DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

  constructor(private token: string) {
    this.api = new ApiService({
      base: GOOGLE_CALENDAR_BASE,
      headers: {
        Authorization: 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      params: {
        key: GOOGLE_API_KEY,
      },
      contentType: 'json',
    })
  }

  async getCalendarsList(): Promise<Schema$CalendarList> {
    try {
      const options = {
        params: {
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          // 'showHidden': true,
          'maxResults': 10,
          'orderBy': 'startTime',
        }
      }

      return this.api.fetch('/users/me/calendarList', options)
    } catch (err) {
      console.log('err' ,err);
      return calendarList
    }

  }

  async getCalendar(calendarId?: Schema$Calendar['id']): Promise<Schema$Calendar | null> {
    if (!calendarId) return null
    try {
      return this.api.fetch(`/calendars/${calendarId}`)
    } catch (err) {
      console.log('err' ,err);
      return calendar
    }
  }

  async getCalendarEvents(
    calendarId: Schema$Calendar['id'] = 'primary',
    params?: Params$Resource$Events$List
  ): Promise<Schema$Events | null> {
    console.log('calendarId', calendarId)
    console.log('params', params)
    if (!calendarId) return null
    try {
      return this.api.fetch(`/calendars/${calendarId}/events`, { params })
    } catch (err) {
      console.log('err' ,err);
      return eventsList
    }
  }
}
