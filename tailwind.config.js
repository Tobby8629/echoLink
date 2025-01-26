/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mulish: ["Mulish","sans-serif"]
      },
      colors: {
        pry: "rgba(90, 79, 243, 1)",
        pry_light: "rgba(243, 229, 245, 1)",
        sec: "rgba(51, 59, 73, 0.7)",
        misc: " rgba(251, 237, 233, 1)",
      },

      height: {
        'sidebar': 'calc(100vh - 8rem)',
      },

      backgroundImage: {
        homeHeader: "url('/svgs/bg.svg')"
      }
    },
  },
  plugins: [],
}