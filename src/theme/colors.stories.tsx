import { Stack } from "@/components/stack";
import { styled } from "stitches.config";
import { light } from "./colorways";

const ColorDisplay = styled("div", {
  size: "60px",
  radius: "$round",
  boxShadow: "$4",
});

const Text = styled("p", {
  fontSize: "$1",
  textAlign: "right",
});

export default {
  title: "Theme/Colors",
};

export const Tokens = () => (
  <Stack direction="row" css={{ stackGap: "$3x", flexWrap: "wrap" }}>
    {Object.keys(light).map((color, key) => (
      <Stack
        direction="column"
        css={{
          stackGap: "$base",
          alignItems: "center",
          padding: "$2x",
        }}
        key={key}
      >
        <ColorDisplay css={{ background: `$${color}` }} />
        <Text>${color}</Text>
      </Stack>
    ))}
  </Stack>
);
