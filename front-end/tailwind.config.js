module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Roboto', 'sans-serif'],
			},
			colors: {
				primary: '#1a202c',
				secondary: '#2d3748',
				accent: '#4a5568',
				background: '#FAFBFC',
			},
		},
	},
	plugins: [],
}