interface Shades {
  lighter: string;
  light: string;
  default: string;
  dark: string;
}

interface Colors {
  primary: {
    background: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
    accent5: string;
    accent6: string;
    accent7: string;
    accent8: string;
    foreground: string;
  };
  dark: {
    background: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
    accent5: string;
    accent6: string;
    accent7: string;
    accent8: string;
    foreground: string;
  };
  error: Shades;
  success: Shades;
  successAlt: Shades;
  warning: Shades;
  orange: Shades;
  violet: Shades;
  cyan: Shades;
  highlight: {
    purple: string;
    green: string;
    pink: string;
    yellow: string;
  };
}

const lightMode: Colors = {
  primary: {
    background: '#FFF',
    accent1: '#FAFAFA',
    accent2: '#EAEAEA',
    accent3: '#999',
    accent4: '#888',
    accent5: '#666',
    accent6: '#444',
    accent7: '#333',
    accent8: '#111',
    foreground: '#000',
  },
  dark: {
    background: '#1d1d1d',
    accent1: '#333',
    accent2: '#444',
    accent3: '#666',
    accent4: '#777',
    accent5: '#888',
    accent6: '#999',
    accent7: '#EAEAEA',
    accent8: '#FAFAFA',
    foreground: '#FFF',
  },
  error: {
    lighter: '#F7D4D6',
    light: '#FF1A1A',
    default: '#E00',
    dark: '#C50000',
  },
  success: {
    lighter: '#D3E5FF',
    light: '#3291FF',
    default: '#0070F3',
    dark: '#0761D1',
  },
  successAlt: {
    lighter: '#81E1FF',
    light: '#15B2FF',
    default: '#019EFF',
    dark: '#007AD6',
  },
  warning: {
    lighter: '#FFEFCF',
    light: '#F7B955',
    default: '#F5A623',
    dark: '#AB570A',
  },
  violet: {
    lighter: '#E3D7FC',
    light: '#8A63D2',
    default: '#7928CA',
    dark: '#4C2889',
  },
  cyan: {
    lighter: '#93FFF8',
    light: '#3CF8DD',
    default: '#1EDABF',
    dark: '#00BCA1',
  },
  orange: {
    lighter: '#FFCF90',
    light: '#FF9635',
    default: '#FF7817',
    dark: '#E15A00',
  },
  highlight: {
    purple: '#F81Ce5',
    green: '#28F97C',
    pink: '#FF007A',
    yellow: '#FFF500',
  },
}

const colors = {
  ...lightMode,
}

export default colors
