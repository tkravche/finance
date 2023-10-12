const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "main-bg": "#101010",
      "white-cl": "#fbfbfb",
      "form-cl": "#ffffff1a",
      "border-bottom-cl": "rgba(255, 255, 255, 0.4)",
      "white-60": "rgba(255, 255, 255, 0.6)",
      "dashboard-text": "#ff868d",
      "yellow-cl                                                                                              ":
        "#ffb627",
      // 'gradient-btn': 'linear-gradient(
      //     167deg,
      //     #ffc727 0%,
      //     #9e40ba 61.46%,
      //     #7000ff 90.54%
      // )',
      "white-btn": "#fcfcfc",
      "text-btn": "#623f8b",
      // 'header-bg-cl': 'linear-gradient(
      //     276deg,
      //     #2e1746 3.19%,
      //     #2e225f 100%
      // )',
      "balance-bg-cl": "rgba(82, 59, 126, 0.6)",
      "table-header-bg-cl": "rgba(255, 255, 255, 0.2)",
      "select-bg-cl": "rgba(74, 86, 226, 0.1)",
      // 'small-form-cl': 'linear-gradient(
      //     360deg,
      //     rgba(83, 61, 186, 0.7) 0%,
      //     rgba(80, 48, 154, 0.7) 35.94%,
      //     rgba(106, 70, 165, 0.52) 61.04%,
      //     rgba(133, 93, 175, 0.13) 100%
      // )',
      // 'currency-graphic-fill': 'linear-gradient(
      //         0deg,
      //         rgba(57, 0, 150, 0.2) 0%,
      //         rgba(57, 0, 150, 0.2) 100%
      //     ),
      // linear-gradient(
      //     180deg,
      //     rgba(255, 255, 255, 0.6) 0%,
      //     rgba(255, 255, 255, 0.32) 37.49%,
      //     rgba(255, 255, 255, 0.16) 60.91%,
      //     rgba(255, 255, 255, 0.09) 76.6%,
      //     rgba(255, 255, 255, 0) 100%
      // )',

      // 'header-shadow': '0px 4px 40px 0px rgba(0, 0, 0, 0.25),
      //     0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset',
      
      "btn-shadow": "1px 9px 15px 0px rgba(0, 0, 0, 0.2)",
      "backdrop-filter": "blur(50px)",
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }
        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      backgroundImage: {
        "register-bg": "url('/src/images/register/bg-register-desktop.jpg')",
        "login-bg": "url('/src/images/login/bg-login-web.jpg')",
        "form-bg": "url('/src/images/form/DesktopBg.jpg')",
      },
      boxShadow:{
        "form-shadow": "0px 4px 60px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
