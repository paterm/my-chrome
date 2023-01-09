import React, { ChangeEvent, useEffect, useState } from 'react'
import { Note } from '@components/widgets/Notes/types'
import { useRecoilValue } from 'recoil'
import { notesState } from '@state/notes'
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material'
import BootstrapDialogTitle from '@components/BootstrapDialogTitle/BootstrapDialogTitle'
import { isNumber, uniqueId } from 'lodash'
import dayjs from 'dayjs'

interface NoteEditorProps {
  noteId: Note['id'] | null
  onAdd: (note: Note) => void
  onChange: (note: Note) => void
  onClose: () => void
}

const NoteEditor: React.FC<NoteEditorProps> = ({
  noteId,
  onAdd,
  onChange,
  onClose,
}) => {
  const notes = useRecoilValue(notesState)
  const [note, setNote] = useState<Note | null>()
  const [content, setContent] = useState<Note['content'] | null>("")
  const [createMode, setCreateMode] = useState(false)

  useEffect(() => {
    /** Новая заметка */
    if (noteId === 'new') {
      setCreateMode(true)
    }

    const foundNote = notes.find(({id}) => id === noteId)
    if (foundNote) {
      setNote(foundNote)
      setContent(foundNote.content)
    }
  }, [noteId])

  const handleClose = () => {
    setCreateMode(false)
    setContent(null)
    setNote(null)
    onClose()
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  const handleSave = () => {
    if (createMode && content?.length) {
      const lastId = notes[notes.length - 1]?.id
      let id = isNumber(lastId) ? lastId + 1 : uniqueId()
      const newNote: Note = {
        id,
        content,
        createdAt: dayjs().format(),
      }

      onAdd(newNote)
      handleClose()
    }

    if (note) {
      const newNote: Note = {...note}
      newNote.content = content ?? ''
      newNote.changedAt = dayjs().format()

      onChange(newNote)
      handleClose()
    }
  }

  return (
    <Dialog
      open={Boolean(noteId)}
      fullWidth
      maxWidth="sm"
    >
      <BootstrapDialogTitle onClose={handleClose}>
        {createMode ? "Новая заметка" : note?.title ?? "Заметка"}
      </BootstrapDialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          multiline
          rows={4}
          variant="standard"
          value={content}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NoteEditor
