
const headingWeight = 700

export default {
  headline: {
    ".chakra-ui-dark &": {
      color: 'dark.foreground',
    },
    color: 'primary.foreground',
    fontSize: ['h1', 'h1', 'headline'],
    fontWeight: headingWeight + 100,
    lineHeight: 1.2,
  },
  h1: {
    // this workaround sucks because these styles
    // override any style-prop styles. use <H1>
    // component instead, which are color moded by
    // default and support all style props
    // ".chakra-ui-dark &": {
    //   color: 'dark.foreground',
    // },
    color: 'primary.foreground',
    fontSize: ['h2', 'h2', 'h1'],
    fontWeight: headingWeight + 100,
  },
  h2: {
    // ".chakra-ui-dark &": {
    //   color: 'dark.foreground',
    // },
    color: 'primary.foreground',
    fontSize: ['h3', 'h3', 'h2'],
    fontWeight: headingWeight,
  },
  h3: {
    // ".chakra-ui-dark &": {
    //   color: 'dark.accent3',
    // },
    color: 'primary.foreground',
    fontSize: 'h3',
    fontWeight: headingWeight - 100,
  },
  h4: {
    // ".chakra-ui-dark &": {
    //   color: 'dark.accent3',
    // },
    color: 'primary.foreground',
    fontSize: 'h4',
    fontWeight: headingWeight - 100,
  },
  h5: {
    // ".chakra-ui-dark &": {
    //   color: 'dark.accent3',
    // },
    color: 'primary.foreground',
    fontSize: 'h5',
    fontWeight: headingWeight - 100,
  },
  eyebrow: {
    // ".chakra-ui-dark &": {
    //   color: 'dark.foreground',
    // },
    color: 'primary.foreground',
    fontSize: 'sm',
    fontWeight: 500,
    letterSpacing: 'wide',
  },
  supertitle: props => ({
    ".chakra-ui-dark &": {
      color: 'dark.accent4',
    },
    color: 'primary.accent4',
    fontSize: 'h4',
    letterSpacing: '1px',
  }),
  domain: {
    fontSize: 'xs',
    fontWeight: 500,
    letterSpacing: 'wide',
  },
  p: {
    fontWeight: 'normal',
    fontSize: 'md',
  },
  caption: props => ({
    color: props.colorMode === 'dark' ? 'dark.accent5' : 'primary.accent5',
    fontWeight: 'normal',
    fontSize: 'sm',
  }),
  label: props => ({
    color: props.colorMode === 'dark' ? 'dark.accent4' : 'primary.accent4',
    fontSize: 'sm',
    fontWeight: 400,
    d: 'block',
    mb: 2,
  }),
  finePrint: props => ({
    color: props.colorMode === 'dark' ? 'dark.accent4' : 'primary.accent4',
    fontWeight: 'normal',
    fontSize: 'sm',
  }),
}