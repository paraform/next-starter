import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";

import { styled } from "stitches.config";
import { Button } from "@/components";

const ColorSwatch = styled("div", {
  size: "$8",
  radius: "$round",
  shadow: "$4",
});

const Flex = styled("div", {
  display: "inline-flex",
  flexWrap: "wrap",
  "& > div": { margin: "$2" },
});

const Heading = styled("h1", {
  margin: "$2",
});

export const ThemeSwitchContainer = styled("a", {
  backgroundColor: "transparent",
  padding: "$0",
  margin: "$2",
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Colors</Heading>
      <br />
      <ThemeSwitchContainer
        type="button"
        data-testid="themeSwitch"
        onClick={toggleTheme}
      >
        <a>
          {theme === "light" ? "Switch To Dark Mode" : "Switch To Light Mode"}
        </a>
      </ThemeSwitchContainer>
      <br />
      <br />
      <Flex>
        <ColorSwatch css={{ background: "$hiContrast" }} />
        <ColorSwatch css={{ background: "$primary" }} />
        <ColorSwatch css={{ background: "$accent" }} />
        <ColorSwatch css={{ background: "$neutral" }} />
        <ColorSwatch css={{ background: "$success" }} />
        <ColorSwatch css={{ background: "$danger" }} />
        <ColorSwatch css={{ background: "$disabled" }} />
      </Flex>
      <br />
      <br />
      <Button>Click Me</Button>
    </div>
  );
}
