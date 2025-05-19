export const Colors = {
  primary: {
    50: '#E9F0FD',
    100: '#D3E1FB',
    200: '#A7C3F7',
    300: '#7BA5F3',
    400: '#4F87EF',
    500: '#4A86E8', // Main primary color
    600: '#3B6BBA',
    700: '#2D508B',
    800: '#1E365D',
    900: '#0F1B2E',
  },
  secondary: {
    50: '#E5F4EF',
    100: '#CCE9DF',
    200: '#99D3BF',
    300: '#66BE9F',
    400: '#34A87F',
    500: '#34A853', // Main secondary color
    600: '#2A8642',
    700: '#1F6532',
    800: '#154421',
    900: '#0A2211',
  },
  warning: {
    50: '#FEF7E6',
    100: '#FEEECC',
    200: '#FDDD99',
    300: '#FCCC66',
    400: '#FBBC33',
    500: '#FBBC04', // Main warning color
    600: '#C99603',
    700: '#977102',
    800: '#644B02',
    900: '#322601',
  },
  error: {
    50: '#FCEAE8',
    100: '#F9D5D1',
    200: '#F3ABA3',
    300: '#ED8174',
    400: '#E75746',
    500: '#EA4335', // Main error color
    600: '#BB362A',
    700: '#8C2820',
    800: '#5E1B15',
    900: '#2F0D0B',
  },
  neutral: {
    50: '#F7F9FC',
    100: '#EFF2F6',
    200: '#DEE5ED',
    300: '#CED8E4',
    400: '#BDCBDB',
    500: '#ADBFD2',
    600: '#8A99A8',
    700: '#68737E',
    800: '#454C54',
    900: '#23262A',
  },
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export const SafetyStatusColors = {
  safe: Colors.secondary[500],
  caution: Colors.warning[500],
  warning: Colors.error[500],
};

export const ThemeColors = {
  lightTheme: {
    background: Colors.white,
    card: Colors.neutral[50],
    text: Colors.neutral[900],
    border: Colors.neutral[200],
    notification: Colors.error[500],
  },
  darkTheme: {
    background: Colors.neutral[900],
    card: Colors.neutral[800],
    text: Colors.neutral[50],
    border: Colors.neutral[700],
    notification: Colors.error[500],
  },
};