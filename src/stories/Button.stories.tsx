import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "../components/Button";

const meta = {
  title: "Buttons/Button",
  component: Button,
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
    initialTheme: {
      control: {
        type: "select",
        options: ["filled", "outlined", "full"],
      },
      description: "버튼 theme",
      defaultValue: "filled",
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "",
    },
    navigateTo: {
      control: "text",
      description: "페이지 이동 경로",
      defaultValue: "",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialTheme: "filled",
    children: "아파트",
  },
};

export const Outlined: Story = {
  args: {
    initialTheme: "outlined",
    children: "아파트",
  },
};

export const Full: Story = {
  args: {
    initialTheme: "full",
    children: "지역 추천",
    navigateTo: "/destination-page",
  },
};
