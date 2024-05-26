import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGame'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenres'

// 定义组件的props类型
interface Props {
  // 当前所选择的游戏类型
  // 其中 Genre | null 表示该属性可以为 null
  selectedGenre: Genre | null
}

function GameGrid({ selectedGenre }: Props) {
  // 使用 useGames 钩子来获取游戏数据
  // 并传递当前所选择的游戏类型作为参数
  const { data, error, isLoading } = useGames(selectedGenre)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding='10px'
        spacing={3}
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
