import { modeColor } from "../util/theme";

export default {
  baseStyle: props => ({
    dialog: {
      borderRadius: 'lg',
      bg: modeColor('background')(props),
      borderColor: modeColor('accent2')(props),
      borderWidth: props.colorMode === 'dark' ? '1px' : 0,
    },
    body: {
      pl: 'base',
      pr: 'base',
      pb: 'base',
      pt: 'md',
    },
    footer: {
      px: 'base',
      py: 4,
      borderTopWidth: '1px',
      borderTopColor: modeColor('accent2')(props),
    },
  }),
  defaultProps: {
    size: 'lg',
    autoFocus: false,
    isCentered: true,
  },
}
