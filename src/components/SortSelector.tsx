import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  sortOrder: string
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
  // value: 后端返回的排序字段
  // label: 前端显示的排序字段
  const sortOrders = [
    { value: '', label: '相关' },
    { value: '-added', label: '添加日期' },
    { value: 'name', label: '名称' },
    { value: '-released', label: '发售日期' },
    { value: '-metacritic', label: '人气' },
    { value: '-rating', label: '平均评分' },
  ]
  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        选项:{currentSortOrder?.label || '相关' }
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
