import { List, ListItem, Skeleton, SkeletonText, Flex } from '@chakra-ui/react'

function GameListSkeleton() {
  return (
    <List>
      <ListItem paddingY='5px'>
        <Flex align='center'>
          <Skeleton height='32px' width='36px' borderRadius={8} />
          <SkeletonText
            ml='2'
            noOfLines={1}
            skeletonHeight='27px'
            w='80%'
          />
        </Flex>
      </ListItem>
    </List>
  )
}

export default GameListSkeleton
