import React from 'react'
import { useSetRecoilState } from 'recoil'
import { drawerWidgetState } from '@state/widgets.state'
import { getWidgetByID } from '@utils/getWidgetByID'
import { WIDGET_ID } from '@const/widgetName'
import { Button } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'


const LastBookmarksButton: React.FC = () => {
  const setDrawerWidget = useSetRecoilState(drawerWidgetState)

  const handleClick = () => {
    const widget = getWidgetByID(WIDGET_ID.LAST_BOOKMARKS)

    if (widget) {
      setDrawerWidget({
        widget,
      })
    }
  }

  return (
    <Button
      onClick={handleClick}
      startIcon={<BookmarkIcon />}
    >
      Последние 5 заметок
    </Button>
  )
}

export default LastBookmarksButton
