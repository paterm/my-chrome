import { atom } from 'recoil'
import { LOCAL_STORAGE_KEYS } from '@const/localStorageKeys'
import dayjs from 'dayjs'

const { WALLPAPER: WallpaperState } = LOCAL_STORAGE_KEYS

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
          const storageString = localStorage.getItem(WallpaperState)
          const storageData = storageString ? JSON.parse(storageString) as WallpaperStorageData : null

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
        localStorage.setItem(WallpaperState, JSON.stringify(newData))
      })
    },
  ],
})
