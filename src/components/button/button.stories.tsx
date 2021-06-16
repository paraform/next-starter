import { Button } from "@/components";
import { styled } from "stitches.config";

const Flex = styled("div", {
  display: "inline-flex",
  flexWrap: "wrap",
  "& > button": { margin: "$2x" },
});

export default {
  title: "Primitives/Button",
  component: Button,
};

export const Component = ({
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

Component.args = {
  colorway: "primary",
  type: "solid",
  size: 2,
  disabled: false,
};

Component.argTypes = {
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

export const Overview = ({ size }: { size: number }) => {
  const colorways = ["primary", "danger", "success", "neutral"];
  return (
    <div>
      {colorways.map((colorway: any, key) => (
        <Flex
          css={{
            mb: "$2",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={key}
        >
          <Button size={size} colorway={colorway} type="solid">
            Button
          </Button>
          <Button size={size} colorway={colorway} type="outlined">
            Button
          </Button>
          <Button size={size} colorway={colorway} type="ghost">
            Button
          </Button>
          <Button size={size} colorway={colorway} type="link">
            Button
          </Button>
        </Flex>
      ))}
    </div>
  );
};

Overview.args = {
  size: 2,
};

Overview.argTypes = {
  size: {
    control: {
      type: "inline-radio",
      options: [1, 2, 3],
    },
  },
};
