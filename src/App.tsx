import Dashboard from '@components/Dashboard'
import WidgetsGrid from '@components/WidgetsGrid'
import ThemeProvider from '@components/ThemeProvider'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'

function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <ThemeProvider>
        <Dashboard>
          <WidgetsGrid />
        </Dashboard>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
