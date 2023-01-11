import { FC, PropsWithChildren } from 'react'
import s from './Dashboard.module.scss'
import WidgetsPanel from '@components/WidgetsPanel/WidgetsPanel'
import Wallpaper from '@components/Wallpaper'
import ActionButton from '@components/Dashboard/ActionButton'
import DrawerWidget from '@components/DrawerWidget'

const Dashboard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.board}>
      <DrawerWidget />
      <WidgetsPanel />
      <Wallpaper />
      <ActionButton />

      <div className={s.content}>
        {children}
      </div>
    </div>
  )
}

export default Dashboard
