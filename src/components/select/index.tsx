import React from "react";
import { styled, CSS, darkTheme } from "stitches.config";
import { CaretSortIcon } from "@radix-ui/react-icons";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { colorway } from "@/theme/colorways";

const SelectWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  borderRadius: "$2",
  fontSize: "$1",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 400,
  flexShrink: 0,
  px: "$2x",
  "&:focus-within": {
    zIndex: 1,
    boxShadow: "$outline",
  },
  variants: {
    size: {
      1: {
        fontSize: "12px",
        height: "$4",
      },
      2: {
        fontSize: "14px",
        height: "$6",
      },
    },
    colorway: {
      primary: {
        ...colorway("neutral"),
        [`.${darkTheme} &`]: {
          ...colorway("primary"),
        },
      },
    },
    type: {
      solid: {
        border: "1px solid $$bold3",
        color: "$$loContrast",
        backgroundColor: "$$soft",
        "&:hover": {
          backgroundColor: "$$soft2",
          color: "$$bold2",
        },
        "&:active": {
          backgroundColor: "$$soft3",
          color: "$$bold3",
        },
        [`.${darkTheme} &`]: {
          color: "$$hiContrast",
          backgroundColor: "$$loContrast",
        },
      },
    },
  },
  defaultVariants: {
    size: "2",
    type: "solid",
    colorway: "primary",
  },
});

const StyledSelect = styled("select", {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "inherit",
  color: "inherit",
  font: "inherit",
  outline: "none",
  width: "100%",
  height: "100%",
  pl: "$1x",
  pr: "$3x",
  lineHeight: "25px",
  "&:hover": {
    cursor: "pointer",
  },
});

const StyledCaretSortIcon = styled(CaretSortIcon, {
  "&:hover": {
    cursor: "pointer",
  },
});

type SelectCSSProp = { css?: CSS };
type SelectOwnProps = SelectCSSProp;
type SelectComponent = Polymorphic.ForwardRefComponent<
  "select",
  SelectOwnProps
>;

export const Select = React.forwardRef(function Select(
  { css, ...props },
  forwardedRef
) {
  return (
    <SelectWrapper css={css}>
      <StyledSelect ref={forwardedRef} {...props} />
      <StyledCaretSortIcon />
    </SelectWrapper>
  );
}) as SelectComponent;

Select.toString = () => `.${SelectWrapper.className}`;
