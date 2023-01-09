import React  from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allWidgetsState, widgetsPanelOpenState } from '@state/widgets'
import { Card, Divider, Drawer, IconButton, Typography } from '@mui/material'
import GridWidgetRenderer from '@components/WidgetsGrid/GridWidgetRenderer'
import CloseIcon from '@mui/icons-material/Close'
// import AddIcon from '@mui/icons-material/Add'
import s from './WidgetPanel.module.scss'

const WidgetsPanel: React.FC = () => {
  const allWidgets = useRecoilValue(allWidgetsState)
  const [open, setOpen] = useRecoilState(widgetsPanelOpenState)

  const handleClose = () => {
    setOpen((o) => !o)
  }

  return (
    <Drawer
      className={s.drawer}
      classes={{
        paper: s.drawerPaper,
      }}
      open={open}
      anchor="right"
      onClose={handleClose}
      variant="persistent"
    >
      <div className={s.drawerHeader}>
        <Typography
          className={s.drawerTitle}
          variant="h5"
        >
          Виджеты
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <Divider sx={{ mb: 2 }} />

      {allWidgets.map((widget) => (
        <Card
          key={widget.id}
          className={s.widget}
          sx={{ mb: 2 }}
        >
          {/*<div className={s.addButtonWrap}>*/}
          {/*  <IconButton*/}
          {/*    size="large"*/}
          {/*    className={s.addButton}*/}
          {/*    color="success"*/}
          {/*  >*/}
          {/*    <AddIcon />*/}
          {/*  </IconButton>*/}
          {/*</div>*/}

          <GridWidgetRenderer widget={widget} passXY={false}/>
        </Card>
      ))}
    </Drawer>
  )
}

export default WidgetsPanel
