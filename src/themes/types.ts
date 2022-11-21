export const darkTheme = {
  colors: {
    primary: '#fff',
    backgroundColor: '#2b2c37',
    borderRightColor: '#3e3f4ed9',
    switchBgColor: '#20212C',
    contentInfo: '#20212C',
  },
};

export const lightTheme = {
  colors: {
    primary: '#828FA3',
    backgroundColor: '#fff',
    borderRightColor: '#dfdbdf',
    switchBgColor: '#F4F7FD',
    contentInfo: '#F4F7FD',
  },
};

export type ThemeColors = typeof lightTheme['colors'] &
  typeof darkTheme['colors'];

export type Mode = 'light' | 'dark';

export enum Modes {
  light = 'light',
  dark = 'dark',
}
