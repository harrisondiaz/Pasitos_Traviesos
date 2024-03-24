/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {

				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
