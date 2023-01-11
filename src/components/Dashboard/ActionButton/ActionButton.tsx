import React, { useMemo } from 'react'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { widgetsPanelOpenState } from '@state/widgets.state'
import { UnsplashService } from '@services/unsplash.service'
import { wallpaperState } from '@state/wallpaper.state'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { appThemeState } from '@state/global.state'
import theme from '@theme'

const {
  WIDGETS,
  REFRESH_WALLPAPER,
  THEME,
} = {
  WIDGETS: 'widgets',
  REFRESH_WALLPAPER: 'refresh_wallpaper',
  THEME: 'theme',
};


const ActionButton: React.FC = () => {
  const setOpenWidgetsPanel = useSetRecoilState(widgetsPanelOpenState);
  const setWallpaper = useSetRecoilState(wallpaperState)
  const [appTheme, setAppTheme] = useRecoilState(appThemeState)

  const actions = useMemo(() => {
    let appThemeSettings

    switch (appTheme) {
      case 'light':
        appThemeSettings = {
          label: 'Тема: Светлая',
          icon: <LightModeIcon />
        }
        break
      case 'dark':
        appThemeSettings = {
          label: 'Тема: Темная',
          icon: <DarkModeIcon />,
        }
        break
      default:
        appThemeSettings = {
          label: 'Тема: Авто',
          icon: <Brightness4Icon />,
        }
    }

    return [
      { id: WIDGETS, icon: <WidgetsIcon />, name: 'Виджеты' },
      { id: REFRESH_WALLPAPER, icon: <RefreshIcon />, name: 'Обновить обои' },
      { id: THEME, icon: appThemeSettings.icon, name: appThemeSettings.label },
    ]
  }, [appTheme])

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
              case THEME:
                setAppTheme((prev) => {
                  if (prev === "auto") {
                    return "dark"
                  }
                  if (prev === "dark") {
                    return "light"
                  }
                  return "auto"
                })
                break
            }
          }}
        />
      ))}
    </SpeedDial>
  )
}

export default ActionButton
