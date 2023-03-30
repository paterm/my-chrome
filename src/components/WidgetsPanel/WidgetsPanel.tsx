import React  from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { allWidgetsState, draggingWidgetState, widgetsPanelOpenState } from '@state/widgets.state'
import { Card, Divider, Drawer, IconButton, List, ListItem, Typography, useTheme } from '@mui/material'
import GridWidgetRenderer from '@components/WidgetsGrid/GridWidgetRenderer'
import CloseIcon from '@mui/icons-material/Close'
import s from './WidgetPanel.module.scss'
import ControlledStack from '@components/WidgetsGrid/ControlledStack'
import Widget from '@components/Grid/Widget'

const gridOptions = {
  float: false,
  acceptWidgets: false,
  cellHeight: 80,
}

const WidgetsPanel: React.FC = () => {
  const [open, setOpen] = useRecoilState(widgetsPanelOpenState)
  const allWidgets = useRecoilValue(allWidgetsState)
  const setDraggingWidget = useSetRecoilState(draggingWidgetState)
  const theme = useTheme()

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

      <List sx={{ overflowY: 'auto' }}>
        {open && allWidgets.map((layout) => (
          <ListItem key={layout.i}>
            <Card
              className={s.widget}
              sx={{ width: '100%', backgroundColor: theme.palette.background.paper }}
            >
              <div
                key={layout.i}
                data-grid={layout}
                draggable
                data-id="p"
                onDragStart={() => setDraggingWidget(layout)}
              >
                <Widget widget={layout} />
              </div>
            </Card>
          </ListItem>
        ))}
      </List>
      {/*<ControlledStack*/}
      {/*  items={allWidgets}*/}
      {/*  options={gridOptions}*/}
      {/*/>*/}
      {/*<List sx={{ overflowY: 'auto' }}>*/}
      {/*  {allWidgets.map((widget) => (*/}
      {/*    <ListItem key={widget.id}>*/}
      {/*      <Card*/}
      {/*        className={s.widget}*/}
      {/*        sx={{ width: '100%', backgroundColor: theme.palette.background.paper }}*/}
      {/*      >*/}
      {/*        <GridWidgetRenderer*/}
      {/*          widget={widget}*/}
      {/*          passXY={false}*/}
      {/*          present*/}
      {/*        />*/}
      {/*      </Card>*/}
      {/*    </ListItem>*/}
      {/*  ))}*/}
      {/*</List>*/}
    </Drawer>
  )
}

export default WidgetsPanel
