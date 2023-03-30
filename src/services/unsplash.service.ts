import { createApi } from 'unsplash-js'
import { Random } from 'unsplash-js/dist/methods/photos/types'


/**
 * достает фото из localStorage если оно было загружено сегодня, иначе загружает его с unsplash
 */
export class UnsplashService {
  private service = createApi({
    accessKey: 'QNdKY8EdnwfSb7ouYh6Fyamf0d6wb1ObV3lXih0yIVQ',
    fetch,
  })

  /**
   * Запрашивает новое изображение
   */
  public async getImage(): Promise<string | null> {
    const result = await this.service.photos.getRandom({
      query: 'wallpaper desktop nature',
      orientation: 'landscape',
      count: 1,
    })

    const imageData = (result.response as Random[])?.[0]

    if (imageData) {
      const {urls} = imageData
      return urls.full
    }

    return null
  }
}
