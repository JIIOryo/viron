/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const COLORS = {
  'thm-primary': 'var(--thm-primary)',
  'thm-on-primary': 'var(--thm-on-primary)',
  'thm-on-primary-high': 'var(--thm-on-primary-high)',
  'thm-on-primary-low': 'var(--thm-on-primary-low)',
  'thm-on-primary-slight': 'var(--thm-on-primary-slight)',
  'thm-on-primary-faint': 'var(--thm-on-primary-faint)',
  'thm-primary-container': 'var(--thm-primary-container)',
  'thm-on-primary-container': 'var(--thm-on-primary-container)',
  'thm-on-primary-container-high': 'var(--thm-on-primary-container-high)',
  'thm-on-primary-container-low': 'var(--thm-on-primary-container-low)',
  'thm-on-primary-container-slight': 'var(--thm-on-primary-container-slight)',
  'thm-on-primary-container-faint': 'var(--thm-on-primary-container-faint)',
  'thm-secondary': 'var(--thm-secondary)',
  'thm-on-secondary': 'var(--thm-on-secondary)',
  'thm-on-secondary-high': 'var(--thm-on-secondary-high)',
  'thm-on-secondary-low': 'var(--thm-on-secondary-low)',
  'thm-on-secondary-slight': 'var(--thm-on-secondary-slight)',
  'thm-on-secondary-faint': 'var(--thm-on-secondary-faint)',
  'thm-secondary-container': 'var(--thm-secondary-container)',
  'thm-on-secondary-container': 'var(--thm-on-secondary-container)',
  'thm-on-secondary-container-high': 'var(--thm-on-secondary-container-high)',
  'thm-on-secondary-container-low': 'var(--thm-on-secondary-container-low)',
  'thm-on-secondary-container-slight':
    'var(--thm-on-secondary-container-slight)',
  'thm-on-secondary-container-faint': 'var(--thm-on-secondary-container-faint)',
  'thm-tertiary': 'var(--thm-tertiary)',
  'thm-on-tertiary': 'var(--thm-on-tertiary)',
  'thm-on-tertiary-high': 'var(--thm-on-tertiary-high)',
  'thm-on-tertiary-low': 'var(--thm-on-tertiary-low)',
  'thm-on-tertiary-slight': 'var(--thm-on-tertiary-slight)',
  'thm-on-tertiary-faint': 'var(--thm-on-tertiary-faint)',
  'thm-tertiary-container': 'var(--thm-tertiary-container)',
  'thm-on-tertiary-container': 'var(--thm-on-tertiary-container)',
  'thm-on-tertiary-container-high': 'var(--thm-on-tertiary-container-high)',
  'thm-on-tertiary-container-low': 'var(--thm-on-tertiary-container-low)',
  'thm-on-tertiary-container-slight': 'var(--thm-on-tertiary-container-slight)',
  'thm-on-tertiary-container-faint': 'var(--thm-on-tertiary-container-faint)',
  'thm-error': 'var(--thm-error)',
  'thm-on-error': 'var(--thm-on-error)',
  'thm-on-error-high': 'var(--thm-on-error-high)',
  'thm-on-error-low': 'var(--thm-on-error-low)',
  'thm-on-error-slight': 'var(--thm-on-error-slight)',
  'thm-on-error-faint': 'var(--thm-on-error-faint)',
  'thm-error-container': 'var(--thm-error-container)',
  'thm-on-error-container': 'var(--thm-on-error-container)',
  'thm-on-error-container-high': 'var(--thm-on-error-container-high)',
  'thm-on-error-container-low': 'var(--thm-on-error-container-low)',
  'thm-on-error-container-slight': 'var(--thm-on-error-container-slight)',
  'thm-on-error-container-faint': 'var(--thm-on-error-container-faint)',
  'thm-background': 'var(--thm-background)',
  'thm-on-background': 'var(--thm-on-background)',
  'thm-on-background-high': 'var(--thm-on-background-high)',
  'thm-on-background-low': 'var(--thm-on-background-low)',
  'thm-on-background-slight': 'var(--thm-on-background-slight)',
  'thm-on-background-faint': 'var(--thm-on-background-faint)',
  'thm-surface': 'var(--thm-surface)',
  'thm-on-surface': 'var(--thm-on-surface)',
  'thm-on-surface-high': 'var(--thm-on-surface-high)',
  'thm-on-surface-low': 'var(--thm-on-surface-low)',
  'thm-on-surface-slight': 'var(--thm-on-surface-slight)',
  'thm-on-surface-faint': 'var(--thm-on-surface-faint)',
  'thm-surface-variant': 'var(--thm-surface-variant)',
  'thm-on-surface-variant': 'var(--thm-on-surface-variant)',
  'thm-on-surface-variant-high': 'var(--thm-on-surface-variant-high)',
  'thm-on-surface-variant-low': 'var(--thm-on-surface-variant-low)',
  'thm-on-surface-variant-slight': 'var(--thm-on-surface-variant-slight)',
  'thm-on-surface-variant-faint': 'var(--thm-on-surface-variant-faint)',
  'thm-outline': 'var(--thm-surface-outline)',

  // TODO: 消す
  background: 'var(--color-background)',
  'on-background': 'var(--color-on-background)',
  'on-background-high': 'var(--color-on-background-high)',
  'on-background-medium': 'var(--color-on-background-medium)',
  'on-background-low': 'var(--color-on-background-low)',
  'on-background-slight': 'var(--color-on-background-slight)',
  'on-background-faint': 'var(--color-on-background-faint)',
  surface: 'var(--color-surface)',
  'surface-00dp': 'var(--color-surface-00dp)',
  'surface-01dp': 'var(--color-surface-01dp)',
  'surface-02dp': 'var(--color-surface-02dp)',
  'surface-03dp': 'var(--color-surface-03dp)',
  'surface-04dp': 'var(--color-surface-04dp)',
  'surface-05dp': 'var(--color-surface-05dp)',
  'on-surface': 'var(--color-on-surface)',
  'on-surface-high': 'var(--color-on-surface-high)',
  'on-surface-medium': 'var(--color-on-surface-medium)',
  'on-surface-low': 'var(--color-on-surface-low)',
  'on-surface-slight': 'var(--color-on-surface-slight)',
  'on-surface-faint': 'var(--color-on-surface-faint)',
  primary: 'var(--color-primary)',
  'on-primary': 'var(--color-on-primary)',
  'on-primary-high': 'var(--color-on-primary-high)',
  'on-primary-medium': 'var(--color-on-primary-medium)',
  'on-primary-low': 'var(--color-on-primary-low)',
  'on-primary-slight': 'var(--color-on-primary-slight)',
  'on-primary-faint': 'var(--color-on-primary-faint)',
  'primary-variant': 'var(--color-primary-variant)',
  'on-primary-variant': 'var(--color-on-primary-variant)',
  'on-primary-variant-high': 'var(--color-on-primary-variant-high)',
  'on-primary-variant-medium': 'var(--color-on-primary-variant-medium)',
  'on-primary-variant-low': 'var(--color-on-primary-variant-low)',
  'on-primary-variant-slight': 'var(--color-on-primary-variant-slight)',
  'on-primary-variant-faint': 'var(--color-on-primary-variant-faint)',
  complementary: 'var(--color-complementary)',
  'on-complementary': 'var(--color-on-complementary)',
  'on-complementary-high': 'var(--color-on-complementary-high)',
  'on-complementary-medium': 'var(--color-on-complementary-medium)',
  'on-complementary-low': 'var(--color-on-complementary-low)',
  'on-complementary-slight': 'var(--color-on-complementary-slight)',
  'on-complementary-faint': 'var(--color-on-complementary-faint)',
  'complementary-variant': 'var(--color-complementary-variant)',
  'on-complementary-variant': 'var(--color-on-complementary-variant)',
  'on-complementary-variant-high': 'var(--color-on-complementary-variant-high)',
  'on-complementary-variant-medium':
    'var(--color-on-complementary-variant-medium)',
  'on-complementary-variant-low': 'var(--color-on-complementary-variant-low)',
  'on-complementary-variant-slight':
    'var(--color-on-complementary-variant-slight)',
  'on-complementary-variant-faint':
    'var(--color-on-complementary-variant-faint)',
  error: 'var(--color-error)',
  'on-error': 'var(--color-on-error)',
  'on-error-high': 'var(--color-on-error-high)',
  'on-error-medium': 'var(--color-on-error-medium)',
  'on-error-low': 'var(--color-on-error-low)',
  'on-error-slight': 'var(--color-on-error-slight)',
  'on-error-faint': 'var(--color-on-error-faint)',
};
const PREFIXES = [
  'bg',
  'active:bg',
  'focus:bg',
  'hover:bg',
  'border',
  'active:border',
  'focus:border',
  'hover:border',
  'text',
  'active:text',
  'focus:text',
  'hover:text',
  'ring',
  'active:ring',
  'focus:ring',
  'hover:ring',
];

module.exports = {
  // @see: https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',
  purge: {
    // uncomment out to enable purge functionality on development environment.
    // enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: (function () {
      const keys = Object.keys(COLORS);
      const safelist = [];
      PREFIXES.forEach(function (prefix) {
        keys.forEach(function (key) {
          safelist.push(`${prefix}-${key}`);
        });
      });
      return safelist;
    })(),
  },
  darkMode: 'media',
  theme: {
    screens: {
      lg: '640px',
    },
    // Utilities by a-z order.
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: COLORS,
      fontSize: {
        em: '1em',
        xxs: ['0.625rem', '1rem'],
      },
      maxHeight: {
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
      },
      maxWidth: {
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
      },
      minHeight: {
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
      },
      minWidth: {
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
      },
      spacing: {
        '1/2em': '0.5em',
        em: '1em',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        33: '8.25rem',
        34: '8.5rem',
        35: '8.75rem',
        37: '9.25rem',
        38: '9.5rem',
        39: '9.75rem',
        41: '10.25rem',
        42: '10.5rem',
        43: '10.75rem',
        45: '11.25rem',
        46: '11.5rem',
        47: '11.75rem',
        49: '12.25rem',
        50: '12.5rem',
        51: '12.75rem',
      },
      zIndex: {
        splash: 11,
        'wrapper-progress': 10,
        'wrapper-notification': 9,
        'wrapper-popover': 8,
        'wrapper-modal': 7,
        'wrapper-drawer': 6,
        'layout-systembar': 5,
        'layout-navigation': 4,
        'layout-appbar': 3,
        'layout-subbody': 2,
        'layout-body': 1,
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
