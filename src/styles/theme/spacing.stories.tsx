import { Stack } from "@/components/stack";
import { styled } from "stitches.config";
import { spacing } from "./spacing";

const SpacingDisplay = styled("div", {
  background: "$purple200",
  width: "200px",
});

const Text = styled("p", {
  fontSize: "$1",
  textAlign: "right",
});

export default {
  title: "Theme/Spacing",
};

export const Component = () => (
  <Stack direction="column" css={{ stackGap: "$2x" }}>
    {Object.keys(spacing).map((space, key) => (
      <Stack
        css={{
          stackGap: "$base",
          alignItems: "center",
        }}
        key={key}
      >
        <SpacingDisplay css={{ height: `$space$${space}` }} />
        <Text>{space}</Text>
      </Stack>
    ))}
  </Stack>
);

Component.args = {};
Component.argTypes = {};
