import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GameListSkeleton from './GameListSkeleton'

// 定义组件的props类型
interface Props {
  // 用于传递点击的genre
  onSelectGenre: (genreId: Genre) => void
  // 所选中的genre
  selectedGenre: Genre | null
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  if (error) return null

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GameListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
              fontSize='lg'
              variant='link'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
