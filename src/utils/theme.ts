import { ColorScheme } from './types/theme.types';
import { colorSchemes, htmlClassList } from './constants/theme.constants';

export const listenPreferredColorScheme = () => {

  window.matchMedia('(prefers-color-scheme: light)')
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
