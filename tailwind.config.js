/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				screenMedia: { raw: '(max-height: 950px)' },
				smallScreenMedia: { raw: '(max-height: 670px)' },
			},
		},
	},
	plugins: [],
};
