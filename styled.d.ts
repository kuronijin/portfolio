import { DefaultTheme as StyledDefaultTheme } from 'styled-components';

interface TextColors {
  primary: string;
  secondary: string;
}

interface BackgroundColors {
  primary: string;
  secondary: string;
}

interface CommonColors {
  black: string;
  white: string;
}

interface Palette {
  // text: TextColors;
  // background: BackgroundColors;
  common: CommonColors;
}

declare module 'styled-components' {
  export interface DefaultTheme extends StyledDefaultTheme {
    palette: Palette;
  }
}
