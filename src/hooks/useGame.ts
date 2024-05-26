import useData from './useData'
import { Genre } from './useGenres'

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

// 获取游戏列表
// 接受一个参数 selectedGenre，类型为 Genre | null
// 用于记录选择的游戏类型
const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  )

export default useGames
