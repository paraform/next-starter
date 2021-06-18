export const spacing = {
  half: "calc($base / 2)",
  base: "4px",
  "2x": "calc($base * 2)",
  "3x": "calc($base * 3)",
  "4x": "calc($base * 4)",
  "6x": "calc($base * 6)",
  "10x": "calc($base * 10)",
  "16x": "calc($base * 16)",
  "24x": "calc($base * 24)",
};

export type Spacing = keyof typeof spacing;
