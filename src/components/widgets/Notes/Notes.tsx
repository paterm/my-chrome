import React, { useState } from 'react'
import WidgetWrap from '@components/widgets/WidgetWrap'
import EventNoteIcon from '@mui/icons-material/EventNote'
import { Alert, Button, IconButton, List, ListItem, ListItemButton } from '@mui/material'
import { useRecoilState } from 'recoil'
import { notesState } from '@state/notes.state'
import NoteEditor from '@components/widgets/Notes/NoteEditor'
import { Note } from '@components/widgets/Notes/types'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { EWidgetID } from '@const/widgetName';


const Notes: React.FC = () => {
  const [notes, setNotes] = useRecoilState<Note[]>(notesState)
  const [openedNoteId, setOpenedNoteId] = useState<Note['id'] | null>(null)

  const handleAdd = (note: Note) => {
    setNotes((prev) => ([...prev, note]))
  }

  const handleChange = (note: Note) => {
    setNotes((prevNotes) => {
      return prevNotes.map((prevNote) => {
        if (prevNote.id === note.id) {
          return note
        }
        return prevNote
      })
    })
  }

  const handleDelete = (noteId: Note['id']) => {
    setNotes((prev) => {
      return prev.filter(({ id }) => id !== noteId)
    })
  }

  const handleClose = () => {
    setOpenedNoteId(null)
  }

  return (
    <WidgetWrap
      title="Заметки"
      Icon={EventNoteIcon}
      widgetID={EWidgetID.NOTES}
    >
      {!notes.length && (
        <Alert security="info">
          Заметок пока нет.
        </Alert>
      )}

      <List
        disablePadding
        sx={{ overflowY: 'auto' }}
      >
        {notes.map((note) => (
          <ListItem
            key={note.id}
            disableGutters
            disablePadding
            secondaryAction={(
              <IconButton
                color="error"
                onClick={() => handleDelete(note.id)}
                size="small"
              >
                <DeleteForeverIcon fontSize="small" />
              </IconButton>
            )}
          >
            <ListItemButton onClick={() => setOpenedNoteId(note.id)}>
              {note.title ?? note.content.substring(0, 50)}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button
        sx={{ width: '100%', mt: 1,  mb: 1 }}
        variant="contained"
        size="small"
        startIcon={<AddIcon />}
        onClick={() => setOpenedNoteId('new')}
      >
        Добавить
      </Button>

      <NoteEditor
        noteId={openedNoteId}
        onAdd={handleAdd}
        onChange={handleChange}
        onClose={handleClose}
      />
    </WidgetWrap>
  )
}

export default Notes
