export const darkTheme = {
  colors: {
    primary: '#fff',
    backgroundColor: '#2b2c37',
    borderRightColor: '#3e3f4ed9',
    switchBgColor: '#20212C',
    contentInfo: '#20212C',
    modalColor: '#2B2C37',
    backdrop: 'rgba(0, 0, 0, 0.2)',
    heading: '#fff',
    placeholder: '##D0D0D0',
    hovers: {
      danger: '',
    },
  },
};

export const lightTheme = {
  colors: {
    primary: '#828FA3',
    backgroundColor: '#fff',
    borderRightColor: '#dfdbdf',
    switchBgColor: '#F4F7FD',
    contentInfo: '#F4F7FD',
    modalColor: '#fff',
    backdrop: 'rgba(0, 0, 0, 0.7)',
    heading: '#000112',
    placeholder: '#D0D0D0',
    hovers: {
      danger: '',
    },
  },
};

export type ThemeColors = typeof lightTheme['colors'] &
  typeof darkTheme['colors'];

export type Mode = 'light' | 'dark';

export enum Modes {
  light = 'light',
  dark = 'dark',
}
