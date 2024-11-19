import type { Meta, StoryObj } from "@storybook/react";

import Label from "@/components/Label";

const meta = {
  title: "Text/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Label에 표시될 텍스트",
      defaultValue: "1. 회사 또는 학교를 입력해주세요.",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "1. 회사 또는 학교를 입력해주세요.",
  },
};
