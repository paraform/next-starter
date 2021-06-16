import React from "react";
import { styled, CSS, StitchesVariants } from "stitches.config";
import { colorway } from "@/utils/tokens";

import type * as Polymorphic from "@radix-ui/react-polymorphic";

const DEFAULT_TAG = "button";

export const StyledButton = styled(DEFAULT_TAG, {
  // Reset
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

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  borderRadius: "$2",
  px: "$3x",
  // states
  "&:hover": {
    cursor: "pointer",
  },
  "&:focus": {
    boxShadow: "$outline",
    transition: "box-shadow 0.2s",
  },
  "&:disabled": {
    $$bold: "$colors$disabledBold",
    $$soft: "$colors$disabledSoft",
    backgroundColor: "$$soft",
    color: "$$bold",
    pointerEvents: "none",
  },

  //Varaints
  variants: {
    size: {
      1: {
        fontSize: "12px",
        height: "$4",
        px: "$2x",
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
      primary: colorway("primary"),
      neutral: colorway("neutral"),
      success: colorway("success"),
      danger: colorway("danger"),
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
        height: "auto",
        px: "0",
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

type ButtonCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type ButtonVariants = Omit<StitchesVariants<typeof StyledButton>, "size">;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants & { size?: any };

type ButtonComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  ButtonOwnProps
>;

export const Button = React.forwardRef((props, forwardedRef) => {
  return <StyledButton {...props} ref={forwardedRef} />;
}) as ButtonComponent;

Button.toString = () => `.${StyledButton.className}`;
