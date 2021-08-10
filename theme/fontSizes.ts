const sizes = {
  xxs: '10px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '32px',
  xxxl: '48px',
}

const headingSizes = {
  h5: sizes.md,
  h4: sizes.lg,
  h3: sizes.xl,
  h2: sizes.xxl,
  h1: sizes.xxxl,
  headline: '64px',
}

export default {
  ...sizes,
  ...headingSizes,
}