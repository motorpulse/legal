import type { Config } from 'tailwindcss';
import type { Defined } from 'xenopomp-essentials';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const darkTheme = {
  colors: {
    accent: '#117BF4',
    'top-border': '#565656',
    primary: {
      bg: '#000000',
      font: '#FFFFFF',
    },
    secondary: {
      bg: '#202020',
    },
  },
} satisfies Theme;
