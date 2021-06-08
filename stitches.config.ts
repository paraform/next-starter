import { createCss, StitchesCss } from "@stitches/react";
import { dark, light } from "styles/palette";

export const stitchesConfig = createCss({
  prefix: "",
  theme: {
    colors: light,
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    space: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "80px",
    },
    sizes: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "80px",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px",
    },
    shadows: {
      none: "none",
      1: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      2: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      3: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      4: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      5: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      6: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
    transitions: {},
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1280px)",
    bp5: "(min-width: 1536px)",
  },
  utils: {
    p: (config) => (value: any) => ({
      padding: value,
    }),
    pt: (config) => (value: any) => ({
      paddingTop: value,
    }),
    pr: (config) => (value: any) => ({
      paddingRight: value,
    }),
    pb: (config) => (value: any) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value: any) => ({
      paddingLeft: value,
    }),
    px: (config) => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value: any) => ({
      marginTop: value,
    }),
    mr: (config) => (value: any) => ({
      marginRight: value,
    }),
    mb: (config) => (value: any) => ({
      marginBottom: value,
    }),
    ml: (config) => (value: any) => ({
      marginLeft: value,
    }),
    mx: (config) => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (config) => (value: any) => ({
      width: value,
      height: value,
    }),
    radius: (config) => (value: any) => ({
      borderRadius: value,
    }),

    shadow: (config) => (value: any) => ({
      boxShadow: value,
    }),

    linearGradient: (config) => (value: any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const { styled, css, global, keyframes, getCssString, config, theme } =
  stitchesConfig;

export type CSS = StitchesCss<typeof stitchesConfig>;
export type { StitchesVariants } from "@stitches/react";

export const utils = config.utils;

export const darkTheme = theme("dark-theme", {
  colors: dark,
});

export const globalStyles = global({
  "html, body": {
    background: "$loContrast",
    color: "$hiContrast",
  },
  a: {
    color: "$accent",
  },
});
