import { colors } from "./colors";

export const light = {
  //semantic colors
  foreground: "$purple900",
  background: "$white",
  accent: "$purple500",
  // primary
  primaryHiContrast: "$purple900",
  primaryLoContrast: "white",
  primaryBold: "$purple500",
  primaryBold2: "$purple600",
  primaryBold3: "$purple700",
  primarySoft: "$purple100",
  primarySoft2: "$purple200",
  primarysoft3: "$purple300",
  //neutral
  neutralHiContrast: "$white",
  neutralLoContrast: "$grey900",
  neutralBold: "$grey700",
  neutralBold2: "$grey800",
  neutralBold3: "$grey900",
  neutralSoft: "$grey100",
  neutralSoft2: "$grey200",
  neutralSoft3: "$grey300",
  // success
  successHiContrast: "$white",
  successLoContrast: "$green900",
  successBold: "$green600",
  successBold2: "$green700",
  successBold3: "$green800",
  successSoft: "$green100",
  successSoft2: "$green200",
  successSoft3: "$green300",
  // danger
  dangerHiContrast: "$red900",
  dangerLoContrast: "$white",
  dangerBold: "$red500",
  dangerBold2: "$red600",
  dangerBold3: "$red700",
  dangerSoft: "$red100",
  dangerSoft2: "$red200",
  dangerSoft3: "$red300",
  // disabled
  disabledBold: "$grey500",
  disabledSoft: "$grey300",
};

export const dark = {
  //semantic colors
  foreground: "$white",
  background: "$purple900",
  accent: "$purple500",
  // primary
  primaryHiContrast: "$white",
  primaryLoContrast: "$purple900",
  primaryBold: "$purple300",
  primaryBold2: "$purple400",
  primaryBold3: "$purple500",
  primarySoft: "$purple900",
  primarySoft2: "$purple800",
  primarySoft3: "$purple700",
  // neutral
  neutralHiContrast: "$white",
  neutralLoContrast: "$grey900",
  neutralBold: "$grey300",
  neutralBold2: "$grey400",
  neutralBold3: "$grey500",
  neutralSoft: "$grey900",
  neutralSoft2: "$grey800",
  neutralSoft3: "$grey700",
  // success
  successHiContrast: "$white",
  successLoContrast: "$green900",
  successBold: "$green300",
  successBold2: "$green400",
  successBold3: "$green500",
  successSoft: "$green900",
  successSoft2: "$green800",
  successSoft3: "$green700",
  // danger
  dangerHiContrast: "$white",
  dangerLoContrast: "$red900",
  dangerBold: "$red300",
  dangerBold2: "$red400",
  dangerBold3: "$red500",
  dangerSoft: "$red900",
  dangerSoft2: "$red800",
  dangerSoft3: "$red700",
  // disabled
  disabledBold: "$purple600",
  disabledSoft: "$purple800",
};

export const colorway = (value: any) => ({
  $$hiContrast: `$colors$${value}HiContrast`,
  $$loContrast: `$colors$${value}LoContrast`,
  $$bold: `$colors$${value}Bold`,
  $$bold2: `$colors$${value}Bold2`,
  $$bold3: `$colors$${value}Bold3`,
  $$soft: `$colors$${value}Soft`,
  $$soft2: `$colors$${value}Soft2`,
  $$soft3: `$colors$${value}Soft3`,
});
