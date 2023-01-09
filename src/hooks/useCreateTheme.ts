import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles'
import theme from '@theme'
import { PaletteMode } from '@mui/material'


const useCreateTheme = (mode: PaletteMode): Theme => {
  const result = createTheme({
    ...theme(mode),
  }) as Theme

  return responsiveFontSizes(result, { factor: 1 })
}

export default useCreateTheme
