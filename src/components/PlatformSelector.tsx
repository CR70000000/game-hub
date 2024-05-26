import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

function PlatformSelector() {
  const { data, error } = usePlatforms()

  // 数据请求错误，不显示内容
  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        游戏平台
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
