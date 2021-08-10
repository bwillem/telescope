import { Box, BoxProps } from "@chakra-ui/react"

function AppContainer(props: BoxProps) {
	return (
		<Box maxW='1000px' px={4} mx='auto' {...props} />
	)
}

export default AppContainer
