/** @type {import('"'"'tailwindcss'"'"').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: { extend: {
    colors: { gold: { primary: "#C9A962", light: "#E8D5B0", dark: "#A8873E" }, dark: { bg: "#1A1A1A", card: "#2A2A2A" }, cream: "#F7F4EF", muted: "#9A9A9A", secondary: "#6B6B6B", emerald: { deep: "#2D5A4C", light: "#3D7A6C" }, border: "#E8E4DD" },
    fontFamily: { playfair: ["Playfair Display", "serif"], inter: ["Inter", "sans-serif"] },
    boxShadow: { card: "0 4px 24px rgba(0,0,0,0.08)", elevated: "0 8px 40px rgba(0,0,0,0.15)", gold: "0 4px 20px rgba(201,169,98,0.3)" }
  }}, plugins: []
};