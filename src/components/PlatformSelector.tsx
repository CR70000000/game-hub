import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGame'

interface Props {
  // 游戏平台选择器,用于选择游戏平台
  onSelectPlatform: (platformId: Platform) => void
  // 所选平台
  selectedPlatform: Platform | null
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms()

  // 数据请求错误，不显示内容
  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || '选择平台'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
