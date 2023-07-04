import React, { forwardRef, useEffect, useMemo, useState } from 'react'
import { EWidgetID } from '@const/widgetName'
import ClockWidget from '@components/widgets/ClockWidget/ClockWidget'
import LastBookmarks from '@components/widgets/LastBookmarks'
import LastBookmarksButton from '@components/widgets/LastBookmarksButton'
import BookmarksButton from '@components/widgets/BookmarksButton'
import BookmarksTree from '@components/widgets/BookmarksTree'
import Notes from '@components/widgets/Notes'
import NotesButton from '@components/widgets/NotesButton'
import Weather from '@components/widgets/Weather'
import Calendar from '@components/widgets/GoogleCalendar'
import { Layout } from 'react-grid-layout'
import dayjs, { Dayjs } from 'dayjs'
import { LastHistory } from '@components/widgets/LastHistory';

interface GridWidgetRendererProps {
  widget: Layout
}

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

const Widget = forwardRef<HTMLDivElement, GridWidgetRendererProps>(
  ({ widget }, ref
) => {
  let Component = null
  const widgetId = useMemo(() => (widget.i as string)?.split('__')?.[0], [widget])

  switch (widgetId) {
    case CLOCK:
      Component = ClockWidget
      break
    case LAST_BOOKMARKS:
      Component = LastBookmarks
      break
    case LAST_BOOKMARKS_BUTTON:
      Component = LastBookmarksButton
      break
    case BOOKMARKS_BUTTON:
      Component = BookmarksButton
      break
    case BOOKMARKS_TREE:
      Component = BookmarksTree
      break
    case NOTES:
      Component = Notes
      break
    case NOTES_BUTTON:
      Component = NotesButton
      break
    case WEATHER:
      Component = Weather
      break
    case CALENDAR:
      Component = Calendar
      break
    case HISTORY:
      Component = LastHistory;
      break
  }

  if (!Component) {
    return null
  }

  return (
    <Component />
  )
})

export default Widget;
