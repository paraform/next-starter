import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "stitches.config";
import { globalStyles } from "@/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      value={{ light: "light", dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
