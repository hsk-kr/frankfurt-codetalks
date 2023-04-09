import type { Meta, StoryObj } from "@storybook/react";

import LinkButton from "./index";

const meta: Meta<typeof LinkButton> = {
  title: "components/landing/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Google: Story = {
  args: {
    href: "https://google.com",
  },
};
