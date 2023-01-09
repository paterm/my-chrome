import { FC, PropsWithChildren } from 'react'
import s from './Dashboard.module.scss'
import WidgetsPanel from '@components/WidgetsPanel/WidgetsPanel'
import Wallpaper from '@components/Wallpaper'
import ActionButton from '@components/Dashboard/ActionButton'

const Dashboard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.board}>
      <div className={s.content}>
        {children}
      </div>

      <WidgetsPanel />
      <Wallpaper />
      <ActionButton />
    </div>
  )
}

export default Dashboard
