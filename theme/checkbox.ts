import { modeColor } from "../util/theme";

export default {
  baseStyle: props => ({
    icon: {
      color: modeColor('background')(props),
    },
    control: {
      borderColor: modeColor('accent5')(props),
      borderWidth: '1px',
      borderRadius: '4px',
      _checked: {
        borderColor: modeColor('foreground')(props),
        bg: modeColor('foreground')(props),
        _hover: {
          bg: modeColor('foreground')(props),
        },
      },
    },
  }),
  label: {
  },
}