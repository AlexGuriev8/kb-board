import '@emotion/react';
import { ThemeColors } from './App';

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColors;
  }
}
