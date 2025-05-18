import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3250",
        secondary: "#424769",
        tertiary: "#7077A1",
        quaternary: "#F6B17A",
      },
    },
  },
  plugins: [],
} satisfies Config;
