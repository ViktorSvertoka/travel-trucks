/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroDesktop: `url(./images/hero.png)`,
      },
      screens: {
        xs: "375px",
        sm: "834px",
        lg: "1440px",
      },
      colors: {
        main: "#101828",
        text: "#475467",
        white: "#ffffff",
        inputs: "#f7f7f7",
        badges: "#f2f4f7",
        gray: "#6c717b",
        grayLight: "#dadde1",
        button: "#e44848",
        buttonHover: "#d84343",
        rating: "#ffc531",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
