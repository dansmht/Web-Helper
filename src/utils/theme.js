import { existingColorSchemes, htmlClassList } from '../constants/theme';

export const listenPreferredColorScheme = () => {

  window.matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', ({ target: { matches: isLight } }) => {

      if (!existingColorSchemes.includes(localStorage.getItem('theme'))) {

        htmlClassList.remove(...existingColorSchemes);

        if (isLight) {
          htmlClassList.add('light');
        } else {
          htmlClassList.add('dark');
        }
      }
    });
};
