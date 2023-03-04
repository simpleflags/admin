import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      lightBlue: string;
      lightSilver: string;
      lightGreen: string;
      red: string;
      aliceBlue: string;
      white: string;
      gainsBoro: string;
      orange: string;
    };
    spacing: {
      none: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    font: {
      sizesmallX: string;
      sizeSmall: string;
      sizeNormal: string;
      sizeMedium: string;
      sizeLarge: string;
    };
  }
}
