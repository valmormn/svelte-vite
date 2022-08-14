const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            // color: theme('colors.blueGray.500'),
            // '> :first-child': { marginTop: '-' },
            // '> :last-child': { marginBottom: '-' },
            p: {
              // fontSize: theme('fontSize.xl')[0],
              // lineHeight: theme('lineHeight.9'),
              // color: theme('colors.blueGray.600'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.1'),
            },
          },
        },
      }),
    }
	},
	plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.3xl') },
        h3: { fontSize: theme('fontSize.2xl') },
        h4: { fontSize: theme('fontSize.xl') },
        p: { fontSize: theme('fontSize.xl') }
      })
    }),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('daisyui')
	],
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		themes: [
      'cupcake',
			'emerald',
			'forest',
			'cmyk',
			'halloween',
			'dark',
			{
				mytheme: {
					primary: '#570df8',
					'primary-focus': '#4506cb',
					'primary-content': '#ffffff',
					secondary: '#f000b8',
					'secondary-focus': '#bd0091',
					'secondary-content': '#ffffff',
					accent: '#37cdbe',
					'accent-focus': '#2aa79b',
					'accent-content': '#ffffff',
					neutral: '#3d4451',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#ffffff',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#d1d5db',
					'base-content': '#1f2937',
					info: '#2094f3',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724'
				}
			}
		]
	}
};
