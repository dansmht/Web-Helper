import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { ThemeProvider } from '../context/theme/ThemeContext';
import { I18nProvider } from '../context/i18n/I18nContext';

import type { PropsWithChildren, ReactElement } from 'react';
import type { RenderOptions } from '@testing-library/react';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <I18nProvider>{children}</I18nProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
