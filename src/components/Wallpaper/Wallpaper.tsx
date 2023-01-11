import React, { useEffect } from 'react'
import { UnsplashService } from '@services/unsplash.service'
import s from './Wallpaper.module.scss'
import { useRecoilState } from 'recoil'
import { wallpaperState } from '@state/wallpaper.state'


const Wallpaper: React.FC = () => {
  const [wallpaper, setWallpaper] = useRecoilState(wallpaperState)

  useEffect(() => {
    (async () => {
      if (!wallpaper) {
        const unsplashService = new UnsplashService()
        const result = await unsplashService.getImage()
        if (result) setWallpaper(result)
      }
    })()
  }, [])

  if (!wallpaper) {
    return null
  }

  return (
    <div
      className={s.container}
      style={{ backgroundImage: `url(${wallpaper})` }}
    />
  )
}

export default Wallpaper
