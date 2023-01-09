import React, { forwardRef } from 'react'
import { GridWidgetType } from '@components/WidgetsGrid/types'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import { GridStackWidget } from 'gridstack/dist/types'
import { WIDGET_NAME } from '@const/widgetName'
import { isFunction } from 'lodash'
import s from './GridWidgetRenderer.module.scss'
import ClockWidget from '@components/widgets/ClockWidget/ClockWidget'
import LastBookmarks from '@components/widgets/LastBookmarks'
import BookmarksTree from '@components/widgets/BookmarksTree'
import Notes from '@components/widgets/Notes'

interface GridWidgetRendererProps {
  widget: GridWidgetType
  onDelete?: (widget: GridStackWidget) => void
  passXY?: boolean
}

const {
  CLOCK,
  LAST_BOOKMARKS,
  BOOKMARKS_TREE,
  NOTES,
} = WIDGET_NAME

const GridWidgetRenderer = forwardRef<HTMLDivElement, GridWidgetRendererProps>(
  ({
     widget,
     passXY = true,
     onDelete,
   },
   ref
) => {
  let Component = null

  switch (widget.id) {
    case CLOCK:
      Component = ClockWidget
      break
    case LAST_BOOKMARKS:
      Component = LastBookmarks
      break
    case BOOKMARKS_TREE:
      Component = BookmarksTree
      break
    case NOTES:
      Component = Notes
      break
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
        >
          <DeleteIcon color="error" />
        </IconButton>
      )}

      <div className="grid-stack-item-content">
        <Component {...widget.props}/>
      </div>
    </div>
  )
})

export default GridWidgetRenderer
