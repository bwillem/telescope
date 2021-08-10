import { modeColor } from "../util/theme";
import { mode } from '@chakra-ui/theme-tools'

export default {
  baseStyle: {
    tabpanel: {
      maxW: 'container.lg',
      mx: 'auto',
      py: 'xl',
      px: [4, 5, 5, 6],
    },
  },
  variants: {
    line: props => ({
      tab: {
        mb: '0px',
        px: 2,
        mx: 2,
        fontSize: 'sm',
        letterSpacing: 'wide',
        color: modeColor('accent3')(props),
        _selected: {
          borderBottomColor: modeColor('foreground')(props),
          color: modeColor('foreground')(props),
        },
        _focus: {
          background: modeColor('background')(props),
          boxShadow: '0 0 0 3px rgba(0, 160, 255, 0.5)',
        },
        _hover: {
          color: modeColor('foreground')(props),
        },
        '&:first-of-type': {
          ml: 0,
        }
      },
      tablist: {
        borderBottomWidth: '0px',
      },
      tabpanel: {
        padding: 'base',
      },
    }),
    vertical: props => ({
      tab: {
        borderBottomColor: 'transparent',
        textAlign: 'left',
        paddingX: 0,
        paddingY: 0,
        marginBottom: 6,
        fontSize: 'sm',
        color: modeColor('accent3')(props),
        _selected: {
          color: modeColor('foreground')(props),
          fontWeight: '600',
        },
        _hover: {
          color: modeColor('foreground')(props),
        },
      },
      tablist: {
        minWidth: '200px',
        alignItems: 'flex-start',
        mr: 4,
      },
      tabpanel: {
        padding: '0px !important',
        pb: 8,
      },
      tabpanels: {
        flexGrow: 1,
        paddingTop: '16px',
      },
    }),
    enclosed: props => ({
      tab: {
        color: modeColor('accent4')(props),
        mb: '-1px',
        fontWeight: 400,
        fontSize: ['xs', 'xs', 'sm'],
        _hover: {
          color: modeColor('foreground')(props),
        },
        _selected: {
          bg: mode('primary.accent1', 'dark.background')(props),
          color: modeColor('foreground')(props),
          borderBottomColor: mode('primary.accent1', 'dark.background')(props),
        },
      },
      tablist: {
        mb: 0,
      },
    }),
  },
}