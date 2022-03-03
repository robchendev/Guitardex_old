import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    { name: "Roboto", styles: [400, 500, 700] },
  ],
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
})

export default typography
