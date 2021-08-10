import { modeColor } from "../util/theme";

export default {
  baseStyle: {
  },
  sizes: {
  },
  variants: {
    outline: props => ({
      field: {
        borderColor: modeColor('accent2')(props),
        borderRadius: 'md',
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
      },
    }),
  },
  defaultProps: {
  },
}