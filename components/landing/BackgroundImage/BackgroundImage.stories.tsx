import type { Meta, StoryObj } from "@storybook/react";

import BackgroundImage from "./index";

const meta: Meta<typeof BackgroundImage> = {
  title: "components/landing/BackgroundImage",
  component: BackgroundImage,
  tags: ["autodocs"],
  args: {
    height: 240,
    imgSrc: "/imgs/code.jpg",
  },
};

export default meta;
type Story = StoryObj<typeof BackgroundImage>;

export const Example: Story = {};
