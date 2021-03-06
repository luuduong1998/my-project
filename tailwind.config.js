const { tailwindColors } = require("./src/styles/tailwind");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		minHeight: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
			screen: "100vh"
		},
		extend: {
			colors: tailwindColors,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
