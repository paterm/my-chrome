import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import { PaletteMode } from '@mui/material'

const { THEME } = LOCAL_STORAGE_KEYS

export const appThemeState = atom<PaletteMode | "auto">({
  key: 'appThemeState',
  default: localStorage.getItem(THEME) as PaletteMode ?? 'auto',
  effects: [
    ({ onSet }) => {
      onSet((value) => {
        if (value === "auto") {
          localStorage.removeItem(THEME)
        } else {
          localStorage.setItem(THEME, value as string)
        }
      })
    },
  ],
})
