import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text whiteSpace='nowrap'>深色模式</Text>
    </HStack>
  )
}

export default ColorModeSwitch
