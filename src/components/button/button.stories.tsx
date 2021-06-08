import { Button } from "@/components";
import { styled } from "stitches.config";

export default {
  title: "Primitives/Button",
  component: Button,
};

export const Default = ({ size }: { size: number }) => (
  <Button size={size}>Button</Button>
);

Default.args = {
  size: "2",
};

Default.argTypes = {
  size: {
    control: {
      type: "inline-radio",
      options: [1, 2, 3],
    },
  },
};
