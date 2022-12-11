/* eslint-disable import/no-extraneous-dependencies */
import { ReactElement, ReactNode } from 'react';
import { render as customRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { StoreProvider } from '../store/createStoreContext';

interface IProps {
  children: ReactNode;
}

export type IRendersOptions = RenderOptions;

export const mockTheme = {
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

function render(
  component: ReactElement,
  { ...renderOptions }: IRendersOptions = {}
) {
  const Wrapper = ({ children }: IProps) => {
    return (
      <StoreProvider>
        <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
      </StoreProvider>
    );
  };
  return customRender(component, { wrapper: Wrapper, ...renderOptions });
}
export { render };
