import React from 'react'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useSetRecoilState } from 'recoil'
import { widgetsPanelOpenState } from '@state/widgets'
import { UnsplashService } from '@services/unsplash.service'
import { wallpaperState } from '@state/wallpaper'

const ACTION_ID = {
  WIDGETS: 'widgets',
  REFRESH_WALLPAPER: 'refresh_wallpaper',
};
const {
  WIDGETS,
  REFRESH_WALLPAPER,
} = ACTION_ID

const actions = [
  { id: WIDGETS, icon: <WidgetsIcon />, name: 'Виджеты' },
  { id: REFRESH_WALLPAPER, icon: <RefreshIcon />, name: 'Обновить обои' },
];

const ActionButton: React.FC = () => {
  const setOpenWidgetsPanel = useSetRecoilState(widgetsPanelOpenState);
  const setWallpaper = useSetRecoilState(wallpaperState)

  return (
    <SpeedDial
      ariaLabel="Speed dial"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.id}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={async () => {
            switch (action.id) {
              case WIDGETS:
                setOpenWidgetsPanel((o) => !o)
                break
              case REFRESH_WALLPAPER:
                const unsplashService = new UnsplashService()
                const result = await unsplashService.getImage()
                if (result) setWallpaper(result)
                break
            }
          }}
        />
      ))}
    </SpeedDial>
  )
}

export default ActionButton
