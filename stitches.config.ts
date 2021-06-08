import { createCss, StitchesCss } from "@stitches/react";

export const stitchesConfig = createCss({
  prefix: "",
  theme: {},
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {},
});

export const { styled, css, global, keyframes, getCssString, config, theme } =
  stitchesConfig;

export type CSS = StitchesCss<typeof stitchesConfig>;

export const globalStyles = global({
  "html, body": {
    padding: "0margin",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, SegoeUI, Roboto, Oxygen, Ubuntu, Cantarell, FiraSans, DroidSans, HelveticaNeue, sans-serif",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "*": {
    boxSizing: "border-box",
  },
});
