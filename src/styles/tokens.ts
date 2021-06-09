// Component specific tokens
// $$hiContrast: "",
// $$loContrast: "",
// $$bold: "",
// $$bold2: "",
// $$bold3: "",
// $$soft: "",
// $$soft2: "",
// $$soft3: "",

import { darkTheme } from "stitches.config";

export const primary = {
  $$hiContrast: "$colors$purple900",
  $$loContrast: "white",
  $$bold: "$colors$purple500",
  $$bold2: "$colors$purple600",
  $$bold3: "$colors$purple700",
  $$soft: "$colors$purple100",
  $$soft2: "$colors$purple200",
  $$soft3: "$colors$purple300",
  [`.${darkTheme} &`]: {
    $hiContrast: "white",
    $$loContrast: "$colors$purple900",
    $$bold: "$colors$purple300",
    $$bold2: "$colors$purple200",
    $$bold3: "$colors$purple100",
    $$soft: "$colors$purple800",
    $$soft2: "$colors$purple700",
    $$soft3: "$colors$purple600",
  },
};

export const neutral = {
  $$hiContrast: "white",
  $$loContrast: "$colors$grey900",
  $$bold: "$colors$grey500",
  $$bold2: "$colors$grey600",
  $$bold3: "$colors$grey700",
  $$soft: "$colors$grey100",
  $$soft2: "$colors$grey200",
  $$soft3: "$colors$grey300",
  [`.${darkTheme} &`]: {
    $$soft: "$colors$grey800",
    $$soft2: "$colors$grey700",
    $$soft3: "$colors$grey600",
  },
};

export const success = {
  $$hiContrast: "white",
  $$loContrast: "$colors$green900",
  $$bold: "$colors$green600",
  $$bold2: "$colors$green700",
  $$bold3: "$colors$green800",
  $$soft: "$colors$green100",
  $$soft2: "$colors$green200",
  $$soft3: "$colors$green300",
};

export const danger = {
  $$hiContrast: "$colors$red900",
  $$loContrast: "white",
  $$bold: "$colors$red500",
  $$bold2: "$colors$red600",
  $$bold3: "$colors$red700",
  $$soft: "$colors$red100",
  $$soft2: "$colors$red200",
  $$soft3: "$colors$red300",
};
