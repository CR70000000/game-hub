import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {
  // 游戏
  // Action 游戏
  // Xbox 游戏
  // Xbox Action 游戏
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } 游戏`
  return <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
}

export default GameHeading
