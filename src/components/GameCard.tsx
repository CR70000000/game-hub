import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGame'
import PlatformIconList from './PlatformIconList'
import CirticScore from './CirticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CirticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
