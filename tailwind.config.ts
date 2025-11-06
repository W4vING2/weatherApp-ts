/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#9B5DE5',
				secondary: '#00BBF9',
				accent: '#F15BB5',
				background: '#F9F9FB',
				surface: '#FFFFFF',
				text: {
					primary: '#1E1E2E',
					muted: '#6B7280',
				},
			},
		},
	},
	plugins: [],
}
