import { PaletteMode } from '@mui/material'

export default (mode: PaletteMode) => ({
  mode,
  primary: {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#99CCF3",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
    contrastText:"rgba(0, 0, 0, 0.87)",
    dark: "#0059B2",
    light: "#66B2FF",
    main: "#3399FF",
  },
  primaryDark: {
    50: "#E2EDF8",
    100: "#CEE0F3",
    200: "#91B9E3",
    300: "#5090D3",
    400: "#265D97",
    500: "#1E4976",
    600: "#173A5E",
    700: "#132F4C",
    800: "#001E3C",
    900: "#0A1929",
    main: "#5090D3"
  },
  secondary: {
    light: '#f3e5f5',
    main: '#ce93d8',
    dark: '#ab47bc',
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  info: {
    light: '#4fc3f7',
    main: '#29b6f6',
    dark: '#0288d1',
    contrastText: '#fff',
  },
  // action: {
  //   active: 'rgba(0, 0, 0, 0.54)',
  //   hover: 'rgba(0, 0, 0, 0.04)',
  //   hoverOpacity: 0.04,
  // },
  background: {
    paper: mode === 'dark' ? '#0A1929' : '#f1f1f1',
  },
  tonalOffset: 0.2
})
