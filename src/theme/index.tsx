// import typography from './typography'
import palette from './palette'
import shape from './shape'
import { createTheme, PaletteMode } from '@mui/material'

const defaultTheme = createTheme();

console.log('defaultTheme', defaultTheme);

export default (mode: PaletteMode) => ({
  ...defaultTheme,
  // typography,
  palette: palette(mode),
  shape,
})
