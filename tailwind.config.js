module.exports = {
	purge: ["./src/**/*.{js,ts,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				red: { DEFAULT: "#C14048", dark: "#A5323D" },
				yellow: { DEFAULT: "#E6A537", dark: "#C6882E" },
				teal: { DEFAULT: "#7FB3D7", dark: "#73A8C9" },
				blue: { DEFAULT: "#273343", dark: "#1E2833" },
				green: { DEFAULT: "#4BAF87", dark: "#419370" },
			},
			fontFamily: {
				Roboto: "Roboto",
				Montserrat: "Montserrat",
			},
			boxShadow: {
				darker:
					"0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)",
			},
			fontSize: {
				"hero-simonyi": "3.85rem",
				"hero-konf": "2.4rem",
				"hero-simonyi-sm": "5.5rem",
				"hero-konf-sm": "3.4rem",
				"hero-simonyi-md": "6.85rem",
				"hero-konf-md": "4.25rem",
				"hero-simonyi-lg": "8.9rem",
				"hero-konf-lg": "5.5rem",
				"hero-simonyi-xl": "10rem",
				"hero-konf-xl": "6.2rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
