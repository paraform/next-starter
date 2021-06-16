import { globalStyles } from "../src/styles/global";

globalStyles();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  themes: {
    default: "light",
    list: [
      { name: "light", class: "light-theme", color: "#fff" },
      { name: "dark", class: "dark-theme", color: "#000" },
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
      order: ["Theme", "Primatives"],
    },
  },
};
