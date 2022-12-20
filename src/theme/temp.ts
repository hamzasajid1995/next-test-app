import {
  extendTheme,
  theme as baseTheme,
  ThemeConfig,
  Theme as ThemeType,
  Colors,
  ComponentMultiStyleConfig,
  ComponentDefaultProps,
  ComponentSingleStyleConfig,
  ChakraTheme,
  withDefaultColorScheme,
  withDefaultProps
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const colors = {
  primary: {
    main: '#A1805A',
    50: '#F6F3EF',
    100: '#E5DCD1',
    200: '#D5C6B4',
    300: '#C4AF96',
    400: '#B49979',
    500: '#A4825B',
    600: '#836849',
    700: '#624E37',
    800: '#413425',
    900: '#211A12'
  },
  secondary: {
    main: '#615e5b',
    50: '#efefef',
    100: '#dfdfde',
    200: '#d0cfce',
    300: '#c0bfbd',
    400: '#b0afad',
    500: '#a09e9d',
    600: '#908e8c',
    700: '#817e7c',
    800: '#716e6b',
    900: '#615e5b'
  },
  success: {
    main: '#198754',
    50: '#E9FBF3',
    100: '#C3F4DD',
    200: '#9CEDC7',
    300: '#75E6B1',
    400: '#4FDE9C',
    500: '#28D786',
    600: '#20AC6B',
    700: '#188150',
    800: '#105636',
    900: '#082B1B'
  },
  danger: {
    main: '#dc3545',
    50: '#FBE9EB',
    100: '#F4C2C7',
    200: '#EE9BA3',
    300: '#E7747F',
    400: '#E04D5B',
    500: '#D92637',
    600: '#AE1E2C',
    700: '#821721',
    800: '#570F16',
    900: '#2B080B'
  },
  warning: {
    main: '#ffc107',
    50: '#FFF9E5',
    100: '#FFEDB8',
    200: '#FFE28A',
    300: '#FFD65C',
    400: '#FFCB2E',
    500: '#FFBF00',
    600: '#CC9900',
    700: '#997300',
    800: '#664D00',
    900: '#332600'
  },
  info: {
    main: '#0DCAF0',
    50: '#E7FAFE',
    100: '#BBF1FB',
    200: '#90E7F9',
    300: '#64DEF7',
    400: '#39D5F4',
    500: '#0DCCF2',
    600: '#0AA3C2',
    700: '#087A91',
    800: '#055161',
    900: '#032930'
  },
  light: {
    main: '#FFFFFF',
    50: '#F2F2F2',
    100: '#DBDBDB',
    200: '#C4C4C4',
    300: '#ADADAD',
    400: '#969696',
    500: '#808080',
    600: '#666666',
    700: '#4D4D4D',
    800: '#333333',
    900: '#1A1A1A'
  }
};

const components = {
  Heading: {
    baseStyle: (props: any) => ({
      color: mode('primary.500', 'primary.300')(props),
      letterSpacing: '1px'
    })
  },
  Text: {
    baseStyle: (props: any) => ({
      color: mode('gray.700', 'white')(props)
    })
  },
  Link: {
    baseStyle: (props: any) => ({
      _focus: {
        ringColor: mode('primary.300', 'primary.600')(props),
        ring: 3
      }
    })
  },
  Button: {
    baseStyle: (props: any) => ({
      borderRadius: 0,
      _focus: {
        ringColor: mode('primary.300', 'primary.600')(props),
        ring: 3
      }
    })
  },

  Input: {
    variants: {
      filled: (props: any) => ({
        field: {
          _focus: {
            borderColor: mode('primary.300', 'primary.600')(props)
          }
        }
      })
    }
  },
  Textarea: {
    variants: {
      filled: (props: any) => ({
        _focus: {
          borderColor: mode('primary.300', 'primary.600')(props)
        }
      })
    }
  }
};

const _theme = {
  config,
  styles: {
    global: {
      body: {}
    }
  },
  colors,
  components,
  fonts: {
    heading: `Poppins, ${baseTheme.fonts.heading}`,
    body: `Poppins, ${baseTheme.fonts.body}`
  }
};

const theme = extendTheme(
  _theme,
  withDefaultProps({
    defaultProps: {
      colorScheme: 'primary'
    }
  })
);

export default theme;

const __theme = {
  mode: {
    dark: {
      compnents: {},
      styles: {}
    },
    light: {
      compnents: {},
      styles: {}
    }
  },
  fonts: {},
  colors: {}
};
