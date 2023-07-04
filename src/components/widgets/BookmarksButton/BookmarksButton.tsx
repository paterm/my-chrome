import React from 'react'
import { Button } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { drawerWidgetState } from '@state/widgets.state'
import { getWidgetByID } from '@utils/getWidgetByID'
import { EWidgetID } from '@const/widgetName'
import BookmarksIcon from '@mui/icons-material/Bookmarks'


const BookmarksButton: React.FC = () => {
  const setDrawerWidget = useSetRecoilState(drawerWidgetState)

  const handleClick = () => {
    const widget = getWidgetByID(EWidgetID.BOOKMARKS_TREE)

    if (widget) {
      setDrawerWidget({
        widget,
      })
    }
  }

  return (
    <Button
      onClick={handleClick}
      startIcon={<BookmarksIcon />}
    >
      Закладки
    </Button>
  )
}

export default BookmarksButton
