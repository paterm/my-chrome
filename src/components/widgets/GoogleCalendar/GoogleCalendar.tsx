import React, { useCallback, useEffect, useState } from 'react'
import GoogleCalendarService from './service'
import { useRecoilState, useRecoilValue } from 'recoil'
import { googleTokenState } from '@state/global.state'
import WidgetWrap from '@components/widgets/WidgetWrap'
import { gCalendarEventsState, gCalendarListState } from './state'
import dayjs, { Dayjs } from 'dayjs'
import Calendar, { CalendarTileProperties } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import s from './Calendar.module.scss'
import { Schema$Event } from '@components/widgets/GoogleCalendar/types'
import { EWidgetID } from '@const/widgetName';

const dateFormat = 'YYYY-MM-DD'


const GoogleCalendar: React.FC = () => {
  const googleToken = useRecoilValue(googleTokenState)
  const [service, setService] = useState<GoogleCalendarService>()
  const [_, setCalendarList] = useRecoilState(gCalendarListState)
  const [calendarEvents, setCalendarEvents] = useRecoilState(gCalendarEventsState)
  const [currentDay, setCurrentDay] = useState<Dayjs | null>(dayjs())

  useEffect(() => {
    if (!googleToken) return
    setService(new GoogleCalendarService(googleToken))
  }, [googleToken])

  useEffect(() => {
    (async () => {
      // await getCalendarList()
      console.log(1)
      await getEvents()
    })()
  }, [service])

  const getCalendarList = useCallback(async () => {
    const list = await service?.getCalendarsList()
    if (list) {
      setCalendarList(list)
    }
  }, [currentDay])

  const getEvents = useCallback(async () => {
    console.log(2)
    const timeMin = currentDay?.startOf('month').format()
    const timeMax = currentDay?.endOf('month').format()
    const response = await service?.getCalendarEvents(
      'primary',
      { timeMin, timeMax, singleEvents: true }
    )
    const events: {[key: string]: Schema$Event[]} = {}
    console.log('response', response)
    response?.items?.forEach((event) => {
      const eventDate = dayjs(event.start?.dateTime! || event.start?.date!).format(dateFormat)
      console.log('eventDate', eventDate)
      if (!events[eventDate]) {
        events[eventDate] = [event]
      } else {
        events[eventDate].push(event)
      }
    })
    console.log('events', events)
    if (events) {
      setCalendarEvents(events)
    }
  }, [currentDay])

  const handleChangeDate = async (date: Date | null) => {
    const $newDate = dayjs(date)
    if ($newDate.format(dateFormat) !== currentDay?.format(dateFormat)) {
      setCurrentDay(dayjs($newDate))
    }
  }

  const handleActiveStartChange = async () => {
    await getEvents()
  }

  const renderDay = useCallback(({ date, view }: CalendarTileProperties) => {
    const activeDate = dayjs(date).format(dateFormat)
    const events = calendarEvents?.[activeDate]
    if (!events?.length) {
      return null
    }
    return (
      <div className={s.calendarReminders}>{events.length}</div>
    )
  }, [calendarEvents])

  return (
    <WidgetWrap
      title="Календарь"
      widgetID={EWidgetID.CALENDAR}
    >
      <Calendar
        className={s.calendar}
        value={currentDay?.toDate()}
        onChange={handleChangeDate}
        onActiveStartDateChange={handleActiveStartChange}
        tileContent={renderDay}
      />
    </WidgetWrap>
  )
}

export default GoogleCalendar
