import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import { PaletteMode } from '@mui/material'

const { THEME } = LOCAL_STORAGE_KEYS

export const googleTokenState = atom<string | null>({
  key: 'googleTokenState',
  default: 'ya29.a0AX9GBdUBKUIUE6_1vkiwQg4XezzEV-fWU4WJxFcF-ZCCmaAE8ew-b4V5N1wBgppQSzrP8TKWaDc5BygFDr0y13tmbVJ46QNKUyPCZ8jtNOpji3qAJUxNVNKpN2g_qfLkpHQ37kLBUlGElH8n-8fimwECI8EEsgaCgYKAYoSARASFQHUCsbCy_ypIvwscQfGUFX40bmFAA0165',
})

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
