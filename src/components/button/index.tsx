import { darkTheme, styled } from "stitches.config";
import { danger, primary, success, neutral } from "@/styles/tokens";

export const Button = styled("button", {
  // mini reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  // custom
  borderRadius: "$2",
  px: "$3",
  "&:hover": {
    cursor: "pointer",
  },
  "&:focus": {
    boxShadow: "$outline",
    transition: "box-shadow 0.2s",
  },
  "&:disabled": {
    backgroundColor: "$grey300",
    color: "$grey500",
    pointerEvents: "none",
    [`.${darkTheme} &`]: {
      backgroundColor: "$purple800",
      color: "$purple600",
    },
  },
  //varaints
  variants: {
    size: {
      1: {
        fontSize: "12px",
        height: "$4",
        px: "$2",
      },
      2: {
        fontSize: "14px",
        height: "$5",
      },
      3: {
        fontSize: "16px",
        height: "$6",
      },
    },
    colorway: {
      primary: primary,
      neutral: neutral,
      success: success,
      danger: danger,
    },
    type: {
      solid: {
        color: "$$loContrast",
        background: "$$bold",
        "&:hover": {
          background: "$$bold2",
        },
        "&:active": {
          background: "$$bold3",
        },
      },
      outlined: {
        color: "$$bold",
        background: "transparent",
        border: "1px solid currentColor",
        "&:hover": {
          background: "$$soft2",
          color: "$$bold2",
        },
        "&:active": {
          background: "$$soft3",
          color: "$$bold3",
        },
      },
      ghost: {
        color: "$$bold",
        background: "transparent",
        border: "1px solid transparent",
        px: "none",
        "&:hover": {
          background: "$$soft2",
          color: "$$bold2",
        },
        "&:active": {
          background: "$$soft3",
          color: "$$bold3",
        },
      },
      link: {
        fontWeight: "$bold",
        color: "$$bold",
        background: "transparent",
        px: "0",
        height: "auto",
        "&:hover": {
          color: "$$bold2",
          textDecoration: "underline",
        },
        "&:active": {
          color: "$$bold3",
          textDecoration: "underline",
        },
      },
    },
  },
  defaultVariants: {
    type: "solid",
    colorway: "primary",
    size: "2",
  },
});
