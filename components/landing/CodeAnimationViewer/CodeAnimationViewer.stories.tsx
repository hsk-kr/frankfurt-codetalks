import type { Meta, StoryObj } from "@storybook/react";

import CodeAnimationViewer from "./index";

const meta: Meta<typeof CodeAnimationViewer> = {
  title: "components/landing/CodeAnimationViewer",
  component: CodeAnimationViewer,
  tags: ["autodocs"],
  args: {
    code: `print('Hello Frankfurt')
    
def test():
  pass`,
    language: "python",
  },
};

export default meta;
type Story = StoryObj<typeof CodeAnimationViewer>;

export const Example: Story = {
  args: {},
};
