/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            mobile: "280px",
            tablet: "768px",
            laptop: "1024px",
            desktop: "1280px",
        },
        extend: {
            colors: {
                mud: "#494037",
                darkOcean: "#373F45",
                salt: "#E2E6E8",
                algae: "#3E3521",
            },
        },
    },
    plugins: [],
};
