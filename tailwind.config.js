/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-title": "#464E5F",
        "text-secondary" : "#3C3744",
        "primary-color": "#6CCED9",
        "button-hover": "#464E5F",
        "gray-bg": "#F7F7F7",
        "gray-bg-2": "#F1F3F3",
        "text-gradient": "#B68FE7",
        "text-gradient-fade" : "#ede3f9",
        "text-gradient-2": "#BBE2E4",
        "bell-red" : "#DC2922",
        "red-color": "#FF3932",
        "red-color-fade" : "#ffd1d0",
        "red-color-2" : "#FF4B55",
        "purple-color":"#B68FE7",
        "light-black-color": "#676767",
        "light-black-color-fade" : "#dedede",
        "header-blue": "#6CCED9"
      },
      boxShadow : {
        "notification-shadow" : "rgba(0, 0, 0, 0.35) 0px 5px 15px" ,
        "date-shadow" : "0px 0px 4px 0px rgba(0, 0, 0, 0.12)",
      }
    },
  },
  plugins: [],
};
