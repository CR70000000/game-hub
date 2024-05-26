import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGame'

function App() {
  // 存储选中的游戏类型（用于实现点击筛选功能）
  // 其中<Genre | null>表示该变量可以为null，因为当用户没有选择任何游戏类型时，该变量应该为null
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // 存储选中的平台（用于实现点击筛选功能）
  // 其中<Platform | null>表示该变量可以为null，因为当用户没有选择任何平台时，该变量应该为null
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  )

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          {/* 将子组件所选择的genre传递到父组件 */}
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  )
}

export default App
