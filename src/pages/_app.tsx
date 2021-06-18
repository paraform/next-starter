import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { themes } from "stitches.config";
import { globalStyles } from "@/theme/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider attribute="class" themes={themes} defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
