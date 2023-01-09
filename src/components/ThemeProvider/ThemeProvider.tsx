import React, { PropsWithChildren } from 'react'

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { CssBaseline } from '@mui/material'

import useCreateTheme from '@hooks/useCreateTheme'
import useCurrentPaletteMode from '@hooks/useCurrentPaletteMode'


const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const paletteMode = useCurrentPaletteMode()
  const theme = useCreateTheme(paletteMode)

  return (
    <MUIThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MUIThemeProvider>
  )
}

export default ThemeProvider
