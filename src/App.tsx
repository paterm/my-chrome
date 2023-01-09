import Dashboard from '@components/Dashboard'
import WidgetsGrid from '@components/WidgetsGrid'
import ThemeProvider from '@components/ThemeProvider'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Dashboard>
          <WidgetsGrid />
        </Dashboard>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
