import { modeColor } from '../util/theme'

export default {
  baseStyle: props => ({
    borderRadius: 'md',
    _disabled: {
      opacity: 1,
      cursor: 'not-allowed',
      backgroundColor: modeColor('background')(props),
      color: modeColor('accent3')(props),
      borderColor: modeColor('accent2')(props),
    },
    _focus: {
      boxShadow: 'focus.default',
      outline: 'none',
    },
  }),
  sizes: {
    xxs: {
      fontSize: 'xs',
      borderRadius: 'sm',
      fontWeight: 500,
      py: 1,
      px: 2,
    },
    xs: {
      fontSize: 'sm',
      borderRadius: 'base',
      fontWeight: 500,
      py: 3,
      px: 3,
    },
    sm: {
      fontSize: 'md',
      fontWeight: 500,
    },
  },
  variants: {
    default: props => ({
      borderWidth: '1px',
      backgroundColor: modeColor('foreground')(props),
      borderColor: modeColor('foreground')(props),
      color: modeColor('background')(props),
      _hover: {
        backgroundColor: modeColor('background')(props),
        color: modeColor('foreground')(props),
      },
      _focus: {
        backgroundColor: modeColor('background')(props),
        color: modeColor('foreground')(props),
      },
    }),
    success: props => ({
      borderWidth: '1px',
      backgroundColor: 'success.default',
      borderColor: 'success.default',
      color: modeColor('background')(props),
      _hover: {
        backgroundColor: modeColor('background')(props),
        color: 'success.default',
      },
      _focus: {
        backgroundColor: modeColor('background')(props),
        color: 'success.default',
      }
    }),
    marketing: props => ({
      borderWidth: '1px',
      backgroundColor: 'successAlt.default',
      borderColor: 'successAlt.default',
      color: modeColor('background')(props),
      _hover: {
        backgroundColor: modeColor('background')(props),
        color: 'successAlt.default',
      },
      _focus: {
        backgroundColor: modeColor('background')(props),
        color: 'successAlt.default',
      }
    }),
    error: props => ({
      borderWidth: '1px',
      backgroundColor: 'error.default',
      borderColor: 'error.default',
      color: modeColor('background')(props),
      _hover: {
        backgroundColor: modeColor('background')(props),
        color: 'error.default',
      },
      _focus: {
        backgroundColor: 'primary.background',
        color: 'error.default',
      }
    }),
    outline: props => ({
      // backgroundColor: modeColor('background')(props),
      backgroundColor: 'transparent',
      // fontWeight: 500,
      _hover: {
        backgroundColor: 'transparent',
        color: modeColor('foreground')(props),
        borderColor: modeColor('foreground')(props),
      },
      _focus: {
        backgroundColor: 'transparent',
        color: modeColor('foreground')(props),
        borderColor: modeColor('foreground')(props),
      },
      _active: {
        bg: 'transparent',
      }
    }),
    group: props => ({
      backgroundColor: modeColor('background')(props),
      borderWidth: '1px',
      borderColor: modeColor('accent2')(props),
      mr: '-1px',
      // fontWeight: 400,
      _hover: {
        backgroundColor: modeColor('accent2')(props),
        color: modeColor('foreground')(props),
        borderColor: modeColor('foreground')(props),
        zIndex: 2,
      },
      _focus: {

      },
    }),
    negative: props => ({
      borderWidth: '1px',
      backgroundColor: modeColor('background')(props),
      borderColor: modeColor('background')(props),
      color: modeColor('foreground')(props),
      _hover: {
        backgroundColor: 'transparent',
        color: modeColor('background')(props),
      },
      _focus: {
        backgroundColor: modeColor('background')(props),
        color: modeColor('background')(props),
      },
    }),
    apparition: props => ({
      transition: 'all 333ms',
      _hover: {
        transition: 'all 180ms',
        color: modeColor('foreground')(props),
        backgroundColor: modeColor('accent2')(props),
      },
      _focus: {
        transition: 'all 333ms',
        color: modeColor('foreground')(props),
        backgroundColor: modeColor('accent2')(props),
      },
    }),
  },
  defaultProps: {
    size: 'sm',
    variant: 'default',
  },
}
