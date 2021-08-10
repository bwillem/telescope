import { modeColor } from "../util/theme";

export default {
  baseStyle: props => ({
    track: {
      height: '14px',
      borderColor: modeColor('foreground')(props),
      borderWidth: '1px',
      bg: modeColor('background')(props),
      padding: '1px',
      _checked: {
        bg: 'success.default',
        borderColor: 'success.default',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
    thumb: {
      borderColor: modeColor('foreground')(props),
      borderWidth: '1px',
      _checked: {
        bg: modeColor('background')(props),
        borderColor: modeColor('background')(props),
      },
    },
  }),
  sizes: {
    sm: {
      track: {
        height: 'auto',
      },
      thumb: {
        height: '12px',
        width: '12px',
      },
    },
  },
}
