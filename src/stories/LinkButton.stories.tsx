import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import LinkButton from "../components/LinkButton";

const meta = {
  title: "Buttons/LinkButton",
  component: LinkButton,
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
    theme: {
      control: {
        type: "select",
        options: ["primary", "disabled"],
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
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: "primary",
    children: "지역 추천",
    navigateTo: "/destination-page",
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    theme: "disabled",
    children: "지역 추천",
    isDisabled: true,
  },
};
