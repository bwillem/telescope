// almost every styling case can be
// solved with component styles.
export default {
  global: {
    'html, body': {
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    '.pac-container': {
      boxShadow: '0 6px 12px rgba(0,0,0,0.22)',
      borderRadius: '0 0 4px 4px',
    },
    '.pac-item': {
      padding: 2,
    },
    '.pl-avatar img': {
      borderRadius: '99px',
      objectFit: 'cover',
    },
    ':focus': {
      outline: 'none',
    },
    '.italic': {
      fontSynthesis: 'none',
      fontVariationSettings: "'ital' 1",
      fontStyle: 'italic',
    },
    '.Range .DayPicker-Day--today': {
      color: 'success.default',
    },
    '.Range .DayPicker-Day--start': {
      borderTopLeftRadius: '8px !important',
      borderBottomLeftRadius: '8px !important',
    },
    '.Range .DayPicker-Day--end': {
      borderTopRightRadius: '8px !important',
      borderBottomRightRadius: '8px !important',
    },
    '.PL .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside)': {
      backgroundColor: 'primary.foreground',
      color: 'primary.background',
    },
    '.chakra-ui-dark .DayPicker': {

    },
    '.chakra-ui-dark .PL .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside)': {
      backgroundColor: 'dark.foreground',
      color: 'dark.background',
    },
    '.PL .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover': {
      backgroundColor: 'primary.foreground',
      borderRadius: '8px',
      color: 'primary.background',
    },
    '.chakra-ui-dark .PL .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover': {
      backgroundColor: 'dark.foreground',
      borderRadius: '8px',
      color: 'dark.background',
    },
    '.PL .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover': {
      backgroundColor: 'primary.foreground',
      color: 'primary.background',
    },
    '.chakra-ui-dark .PL .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover': {
      backgroundColor: 'dark.foreground',
      color: 'dark.background',
    },
    '.Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside)': {
      backgroundColor: 'primary.accent2',
      color: 'primary.accent6',
    },
    '.chakra-ui-dark .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside)': {
      backgroundColor: 'dark.accent2',
      color: 'dark.accent6',
    },
    '.Range .DayPicker-Day': {
      borderRadius: '0',
      fontSize: ['16px', '16px', '14px'],
    },
    '.Range .DayPicker-Month': {
    },
    '.Range .DayPicker-Month:last-child': {
    },
    '.PL .DayPickerInput-OverlayWrapper': {
      marginTop: '16px',
    },
    '.PL .DayPicker-Caption': {
      padding: 0,
      fontSize: '16px',
      fontWeight: 500,
    },
    '.PL .DayPicker-Months': {
      flexWrap: ['wrap', 'wrap', 'nowrap'],
    },
    '.PL .DayPickerInput': {
      display: 'block',
    },
    '.PL .DayPickerInput-Overlay': {
      borderRadius: 'lg',
      boxShadow: 'lg',
      zIndex: 3,
    },
    '.chakra-ui-dark .PL .DayPickerInput-Overlay': {
      bg: 'dark.background',
      borderRadius: 'lg',
      boxShadow: 'lg',
      zIndex: 3,
    },
    '.PL .DayPicker-Caption > div': {
      fontSize: '16px',
      fontWeight: 600,
    },
  },
}
