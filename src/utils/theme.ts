import { ColorScheme } from './types/theme.types';
import { colorSchemes, htmlClassList } from './constants/theme.constants';

export const listenPreferredColorScheme = () => {

  window.matchMedia('(prefers-color-scheme: light)')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .addEventListener('change', (e: any) => {

      if (!colorSchemes.includes(localStorage.getItem('theme') as ColorScheme)) {

        htmlClassList.remove(...colorSchemes);

        if (e?.target?.matches) {
          htmlClassList.add('light');
        } else {
          htmlClassList.add('dark');
        }
      }
    });
};
