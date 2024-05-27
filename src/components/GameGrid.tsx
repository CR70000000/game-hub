import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames, { Platform } from '../hooks/useGame'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenres'
import { GameQuery } from '../App'

// 定义组件的props类型
interface Props {
  gameQuery: GameQuery
}

function GameGrid({ gameQuery }: Props) {
  // 使用 useGames 钩子来获取游戏数据
  // 并传递当前所选择的游戏类型作为参数
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding='10px'
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
