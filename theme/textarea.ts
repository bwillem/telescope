import { modeColor } from "../util/theme";

export default {
  baseStyle: {
  },
  sizes: {
  },
  variants: {
    outline: props => ({
      borderColor: modeColor('accent2')(props),
      _hover: {
        borderColor: modeColor('foreground')(props),
      },
      _placeholder: {
        color: modeColor('accent3')(props),
      },
      _focus: {
        borderColor: modeColor('foreground')(props),
        boxShadow: 'none',
      },
    }),
  },
  defaultProps: {
  },
}