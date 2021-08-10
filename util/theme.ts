import { useColorModeValue } from '@chakra-ui/color-mode'
import { mode } from '@chakra-ui/theme-tools'

const modeColor = (color: string) => (props: any) => mode(`primary.${color}`, `dark.${color}`)(props)

const useLightModeValue = (value: string) => {
	return useColorModeValue(value, null)
}

const useDarkModeValue = (value: string) => {
	return useColorModeValue(null, value)
}

export {
	modeColor,
	useLightModeValue,
	useDarkModeValue,
}
