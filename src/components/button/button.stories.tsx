import { Button } from "@/components";

export default {
  title: "Primitives/Button",
  component: Button,
};

export const Default = ({
  size,
  colorway,
  type,
  disabled,
}: {
  size: number;
  colorway: "primary" | "danger" | "success" | "neutral";
  type: "solid" | "outlined" | "ghost" | "link";
  disabled: boolean;
}) => (
  <Button size={size} colorway={colorway} type={type} disabled={disabled}>
    Button
  </Button>
);

Default.args = {
  colorway: "primary",
  type: "solid",
  size: 2,
  disabled: false,
};

Default.argTypes = {
  colorway: {
    control: {
      type: "select",
      options: ["primary", "danger", "success", "neutral"],
    },
  },
  type: {
    control: {
      type: "select",
      options: ["solid", "outlined", "ghost", "link"],
    },
  },
  size: {
    control: {
      type: "inline-radio",
      options: [1, 2, 3],
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
  },
};
