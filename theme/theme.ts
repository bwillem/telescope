import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import components from './components'
import fonts from './fonts'
import fontSizes from './fontSizes'
import layerStyles from './layerStyles'
import shadows from './shadows'
import sizes from './sizes'
import styles from './styles'
import textStyles from './textStyles'
import radii from './radii'
import space from './space'
import config from './config'

export default extendTheme({
  fonts,
  // @ts-ignore this broke when updating to chakra 1.13
  colors,
  fontSizes,
  // @ts-ignore this broke when updating to chakra 1.13
  components,
  layerStyles,
  textStyles,
  shadows,
  styles,
  space,
  sizes,
  radii,
  config,
})
