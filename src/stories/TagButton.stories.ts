import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TagButton from "../components/TagButton";

const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "",
    },
    isChecked: {
      control: "boolean",
      description: "버튼 활성화 여부",
      defaultValue: false,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "아파트",
    isChecked: false,
  },
};
