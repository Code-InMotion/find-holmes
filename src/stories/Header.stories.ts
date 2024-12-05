import type { Meta, StoryObj } from "@storybook/react";

import Header from "@/components/Header";

const meta = {
  title: "Text/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Header에 표시될 텍스트",
      defaultValue: "조건에 맞는 지역 TOP 5",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "조건에 맞는 지역 TOP 5",
  },
};
