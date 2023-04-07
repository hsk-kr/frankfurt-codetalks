import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "components/landing/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Yellow: Story = {
  args: {
    color: "yellow",
  },
};
