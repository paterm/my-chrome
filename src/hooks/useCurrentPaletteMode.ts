import { useRecoilValue } from 'recoil'
import { appThemeState } from '@state/global.state'
import { PaletteMode, useMediaQuery } from '@mui/material'
import { useMemo } from 'react'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'

const { THEME } = LOCAL_STORAGE_KEYS

const useCurrentPaletteMode = (): PaletteMode => {
  const appTheme = useRecoilValue(appThemeState)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersScheme = useMemo(() => (
    prefersDarkMode ? 'dark' : 'light'
  ), [prefersDarkMode])

  return useMemo(() => {
    const storageValue = localStorage.getItem(THEME)
    return storageValue && (appTheme === 'light' || appTheme === 'dark') ? appTheme : prefersScheme
  }, [appTheme, [prefersScheme]])
}

export default useCurrentPaletteMode
