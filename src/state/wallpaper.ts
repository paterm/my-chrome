import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import dayjs from 'dayjs'

const { WALLPAPER } = LOCAL_STORAGE_KEYS

type WallpaperStorageData = {
  date: string
  image: string
}

export const wallpaperState = atom<string | null>({
  key: 'wallpaperState',
  default: null,
  effects: [
    ({ setSelf, trigger }) => {
      if (trigger === 'get') {
        try {
          const storageString = localStorage.getItem(WALLPAPER)
          const storageData = storageString ? JSON.parse(storageString) as WallpaperStorageData : null

          console.log('storageData', storageData)
          // Если есть в localStorage сегодняшняя картинка, то возвращаем ее
          if (storageData?.date === dayjs().format('YYYY-MM-DD')) {
            setSelf(storageData.image)
          }
        } catch (e) {
          console.log(e)
        }
      }
    },
    ({ onSet }) => {
      onSet((value) => {
        const newData: WallpaperStorageData = {
          image: value as string,
          date: dayjs().format('YYYY-MM-DD'),
        }
        localStorage.setItem(WALLPAPER, JSON.stringify(newData))
      })
    },
  ],
})
