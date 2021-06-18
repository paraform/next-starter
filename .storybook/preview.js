import { globalStyles } from "../src/theme/global";
import { darkTheme, theme as lightTheme } from "../stitches.config";

globalStyles();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  themes: {
    default: "light",
    target: "html",
    list: [
      { name: "light", class: lightTheme.toString(), color: "#fff" },
      { name: "dark", class: darkTheme.toString(), color: "#000" },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Theme", ["Colors", "Spacing"], "Primatives", ["Button"]],
    },
  },
};
