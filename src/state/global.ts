import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import { PaletteMode } from '@mui/material'

const { THEME } = LOCAL_STORAGE_KEYS

export const appThemeState = atom<PaletteMode>({
  key: 'appThemeState',
  default: localStorage.getItem(THEME) as PaletteMode ?? 'light',
  effects: [
    ({ onSet }) => {
      onSet((value) => {
        localStorage.setItem(THEME, value as string)
      })
    },
  ],
})
