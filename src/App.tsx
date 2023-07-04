import Dashboard from '@components/Dashboard'
import WidgetsGrid from '@components/WidgetsGrid'
import ThemeProvider from '@components/ThemeProvider'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import RecoilNexus from 'recoil-nexus'
import { useEffect } from 'react'
import { googleTokenState } from '@state/global.state'
import { StyledEngineProvider } from '@mui/material/styles';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <AppWrap />
    </RecoilRoot>
  )
}

function AppWrap() {
  const setToken = useSetRecoilState(googleTokenState)

  // Авторизация в Google сервисах
  useEffect(() => {
    // chrome?.identity?.getAccounts?.(console.log)
    chrome?.identity?.getProfileUserInfo?.(console.log)
    chrome?.identity?.getAuthToken({ interactive: true }, setToken);
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <Dashboard>
          <WidgetsGrid />
        </Dashboard>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
