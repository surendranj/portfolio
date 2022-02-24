const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#001219",
                secondary: "#005f73",
                tertiary: "#0a9396",
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            xs: "300px",
            ...defaultTheme.screens,
        },
        // fontFamily: {
        //     poppins: ["Poppins", "sans-serif"],
        // },
    },
    plugins: [],
};
