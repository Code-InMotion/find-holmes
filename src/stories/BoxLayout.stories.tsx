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
    children: {
      description: "BoxLayout 안에 들어갈 내용",
    },
    className: {
      control: "text",
      description: "BoxLayout의 CSS 클래스",
      defaultValue: "text-center",
    },
  },
} satisfies Meta<typeof BoxLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
    className: "text-center",
  },
};
