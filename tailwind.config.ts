import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: "selector",
      colors: {
        /* Brand Color  */
        base_primary: "var(--base_primary)",
        base_secondary: "var(--base_secondary)",

        /* Color Shades  */
        shade_primary40: "var(--shade_primary40)",
        shade_primary60: "var(--shade_primary60)",
        shade_primary80: "var(--shade_primary80)",
        shade_primary100: "var(--shade_primary100)",

        /* Object Color */
        object_black90: "var(--object_black90)",
        object_black60: "var(--object_black60)",
        object_black30: "var(--object_black30)",
        object_white90: "var(--object_white90)",
        object_white60: "var(--object_white60)",
        object_white30: "var(--object_white30)",

        /* Alert Color */
        alert_error: "var(--alert_error)",
        alert_warning: "var(--alert_warning)",
        alert_success: "var(--alert_success)",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      height: {
        16: "60px"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
