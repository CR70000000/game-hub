import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize={'64px'} />
      <Text>导航栏</Text>
    </HStack>
  )
}

export default NavBar
