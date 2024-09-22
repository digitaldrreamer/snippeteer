import { fontFamily } from "tailwindcss/defaultTheme";
import flowbitePlugin from 'flowbite/plugin'


/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					'50': '#fffdea',
					'100': '#fff7c5',
					'200': '#fff085',
					'300': '#ffe146',
					'400': '#ffcf1b',
					'500': '#ffae00',
					'600': '#e28400',
					'700': '#bb5c02',
					'800': '#984708',
					'900': '#7c3a0b',
					'950': '#481d00',
				},
				secondary: {
					'50': '#fff1f3',
					'100': '#ffe4e7',
					'200': '#fecdd5',
					'300': '#fca5b4',
					'400': '#fa728c',
					'500': '#f24167',
					'600': '#d11d4d',
					'700': '#bc1445',
					'800': '#9e1341',
					'900': '#87143c',
					'950': '#4b061c',
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), flowbitePlugin, require('preline/plugin')]
};

export default config;


