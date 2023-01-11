import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import { Note } from '@components/widgets/Notes/types'

const { NOTES: NotesState } = LOCAL_STORAGE_KEYS

const storageNotes = localStorage.getItem(NotesState)

export const notesState = atom<Note[]>({
  key: 'notesState',
  default: storageNotes ? JSON.parse(storageNotes) : [],
  effects: [
    ({ onSet }) => {
      onSet((value) => {
        localStorage.setItem(NotesState, JSON.stringify(value))
      })
    }
  ]
})
