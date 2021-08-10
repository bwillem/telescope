import { modeColor } from "../util/theme";

export default {
  baseStyle: props => ({
    item: {
      fontSize: 'sm',
      py: '4px',
      px: 2,
      m: 1,
      borderRadius: 'base',
      _focus: {
        color: 'white',
        background: 'success.default',
      },
    },
    list: {
      py: 0,
      pr: 2,
      borderColor: modeColor('accent2')(props),
      bg: modeColor('background')(props),
      borderRadius: 'md',
      boxShadow: 'card',
      zIndex: 99,
    },
    groupTitle: {
      fontSize: '10px',
      mx: 3,
      color: modeColor('accent3')(props),
      textTransform: 'uppercase',
    }
  }),
}