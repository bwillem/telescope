import { modeColor } from "../util/theme";

// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/popover.ts
export default {
  baseStyle: props => ({
    popper: {
    },
    content: {
      bg: modeColor('accent1')(props),
      borderRadius: 'md',
      borderColor: modeColor('accent2')(props),
      boxShadow: 'xl',
    },
    body: {
      p: 4,
      bg: 'transparent',
    },
    header: {
      px: 4,
      py: 2,
      bg: 'transparent',
    },
    closeButton: {
      mt: 4,
    },
  }),
}
