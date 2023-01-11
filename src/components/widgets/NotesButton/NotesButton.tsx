import React from 'react'
import { Button } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { drawerWidgetState } from '@state/widgets.state'
import { getWidgetByID } from '@utils/getWidgetByID'
import { WIDGET_ID } from '@const/widgetName'
import EventNoteIcon from '@mui/icons-material/EventNote'


const NotesButton: React.FC = () => {
  const setDrawerWidget = useSetRecoilState(drawerWidgetState)

  const handleClick = () => {
    const widget = getWidgetByID(WIDGET_ID.NOTES)

    if (widget) {
      setDrawerWidget({
        widget,
      })
    }
  }

  return (
    <Button
      onClick={handleClick}
      startIcon={<EventNoteIcon />}
    >
      Заметки
    </Button>
  )
}

export default NotesButton
