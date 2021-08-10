import colors from './colors';

/**
 * todo: aggregate these to 3 or 4
 */
export default {
  // popover: '0px 10px 66px rgba(0, 0, 0, 0.11)',
  card: '0px 1px 9px rgba(60, 60, 60, 0.15), 0px 1px 2px rgba(60, 60, 60, 0.3);',
  // cardHover: '0px 10px 66px rgba(0, 0, 0, 0.11)',
  md: `0 4px 50px rgba(0,0,0,0.15)`,
  // large: `rgba(0, 0, 0, 0.12) 0px 30px 60px 0px`,
  lg: '0 1px 3px 0 rgba(60,64,67,.30),0 4px 8px 3px rgba(60,64,67,.15)',
  avatarHover: `rgb(0 0 0 / 30%) 0px 8px 12px 0px`,
  geometric: `4px 4px 0 ${colors.primary.accent2}`,
  // card: `0 2px 6px rgba(0,0,0,0.15)`,
  cardHover: '0 6px 12px rgba(0,0,0,0.33)',
  searchBox: '0 4px 50px rgba(0,0,0,0.15), 0 1px 6px 0 rgb(32 33 36 / 28%)',
  // googleSnippit: '1px 3px 14px rgba(32, 33, 36, 0.08)',
  focus: {
    default: `0 0 0 2px #fff, 0 0 0 3px rgba(0,112,243,0.15)`,
    success: `0 0 0 2px #fff, 0 0 0 4px ${colors.success.default}`,
    error: `0 0 0 2px #fff, 0 0 0 4px ${colors.error.default}`,
    outline: `0 0 0 2px #fff, 0 0 0 4px #000`,
  },
}