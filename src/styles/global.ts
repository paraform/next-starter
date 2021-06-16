import { stitchesGlobal } from "stitches.config";

export const globalStyles = stitchesGlobal({
  "@font-face": [
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontDisplay: "swap",
      src: 'url(/fonts/Inter_Regular.ttf) format("ttf")',
    },
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontDisplay: "swap",
      src: 'url(/fonts/Inter_SemiBold.ttf) format("ttf")',
    },
  ],
  "::selection": {
    backgroundColor: "$foreground",
    color: "$background",
  },
  "html, body": {
    background: "$background",
    color: "$foreground",
    fontFamily: "$base",
    fontWeight: "$normal",
    margin: 0,
  },
  a: {
    color: "$accent",
  },

  figure: { margin: 0 },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  svg: { display: "inline-block", verticalAlign: "middle" },
});
