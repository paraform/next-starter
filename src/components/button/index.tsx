import { darkTheme, styled } from "stitches.config";

export const Button = styled("button", {
  // mini reset
  appearance: "none",
  border: "none",
  backgroundColor: "transparent",
  lineHeight: 1,
  borderRadius: "$2",
  px: "$3",
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    size: {
      1: {
        fontSize: "12px",
        height: "$4",
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
      primary: {
        backgroundColor: "$primary",
        color: "$loContrast",
        "&:hover": {
          backgroundColor: "$primaryHover",
        },
        [`.${darkTheme} &`]: {
          color: "$hiContrast",
        },
      },
    },
  },
  defaultVariants: {
    colorway: "primary",
    size: "2",
  },
});
