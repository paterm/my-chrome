import React, { forwardRef, useMemo } from 'react'
import { GridWidgetType } from '@components/WidgetsGrid/types'
import { IconButton } from '@mui/material'
import { GridStackWidget } from 'gridstack/dist/types'
import { EWidgetID } from '@const/widgetName'
import { isFunction } from 'lodash'
import s from './GridWidgetRenderer.module.scss'
import ClockWidget from '@components/widgets/ClockWidget/ClockWidget'
import LastBookmarks from '@components/widgets/LastBookmarks'
import BookmarksTree from '@components/widgets/BookmarksTree'
import Notes from '@components/widgets/Notes'
import CancelIcon from '@mui/icons-material/Cancel'
import NotesButton from '@components/widgets/NotesButton'
import BookmarksButton from '@components/widgets/BookmarksButton'
import LastBookmarksButton from '@components/widgets/LastBookmarksButton'
import Weather from '@components/widgets/Weather'
import Calendar from '@components/widgets/GoogleCalendar'
import { LastHistory } from '@components/widgets/LastHistory';

interface GridWidgetRendererProps {
  widget: GridWidgetType
  onDelete?: (widget: GridStackWidget) => void
  passXY?: boolean
  present?: boolean
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

const GridWidgetRenderer = forwardRef<HTMLDivElement, GridWidgetRendererProps>(
  ({
     widget,
     passXY = true,
     onDelete,
     present,
   },
   ref
) => {
  let Component = null
  const widgetId = useMemo(() => (widget.id as string)?.split('__')?.[0], [widget])

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
      break;
  }

  if (!Component) {
    return null
  }

  const props = {
    className: `grid-stack-item ${s.item}`,
    draggable: true,
    ref,
    'gs-id': widget.id,
    'gs-w': widget.w,
    'gs-h': widget.h,
    'gs-x': passXY ? widget.x : null,
    'gs-y': passXY ? widget.y : null,
  }

  return (
    <div {...props}>
      {isFunction(onDelete) && (
        <IconButton
          className={s.deleteButton}
          onClick={() => onDelete(widget)}
          color="error"
          size="small"
        >
          <CancelIcon fontSize="small" />
        </IconButton>
      )}

      <div className="grid-stack-item-content">
        <Component {...widget.props}/>
      </div>
    </div>
  )
})

export default GridWidgetRenderer
