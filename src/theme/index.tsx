// import typography from './typography'
import palette from './palette'
import shape from './shape'
import { PaletteMode } from '@mui/material'

export default (mode: PaletteMode) => ({
  // typography,
  palette: palette(mode),
  shape,
})
