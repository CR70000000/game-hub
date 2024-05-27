import { GameQuery } from '../App'
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
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  )

export default useGames
