import type { Meta, StoryObj } from "@storybook/react";

import BoxLayout from "@/components/BoxLayout";

const meta = {
  title: "Layout/BoxLayout",
  component: BoxLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div style={{ width: "450px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    height: {
      control: "number",
      description: "BoxLayout의 높이",
      defaultValue: 80,
    },
    paddingY: {
      control: "number",
      description: "BoxLayout의 상하 패딩",
      defaultValue: 18,
    },
    children: {
      description: "BoxLayout 안에 들어갈 내용",
    },
  },
} satisfies Meta<typeof BoxLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 80,
    paddingY: 18,
    children: "",
  },
};
