import React from 'react'
import { useRecoilState } from 'recoil'
import { drawerWidgetState } from '@state/widgets.state'
import { Drawer } from '@mui/material'
import GridWidgetRenderer from '@components/WidgetsGrid/GridWidgetRenderer'
import s from './DrawerWidget.module.scss'


const DrawerWidget: React.FC = () => {
  const [state, setState] = useRecoilState(drawerWidgetState)

  const handleClose = () => {
    setState(null)
  }

  if (!state?.widget) {
    return null
  }

  return (
    <Drawer
      open={Boolean(state?.widget)}
      anchor={state?.anchor ?? 'left'}
      onClose={handleClose}
      classes={{ paper: s.container }}
    >
      <GridWidgetRenderer widget={state?.widget} />
    </Drawer>
  )
}

export default DrawerWidget
