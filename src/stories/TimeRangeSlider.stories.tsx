import type { Meta, StoryObj } from "@storybook/react";

import TimeRangeSlider from "@/components/TimeRangeSlider";

const meta = {
  title: "Components/TimeRangeSlider",
  component: TimeRangeSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div style={{ width: "420px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    min: {
      control: { type: "number" },
      description: "슬라이더의 최소값",
      defaultValue: 0,
    },
    max: {
      control: { type: "number" },
      description: "슬라이더의 최대값",
      defaultValue: 80,
    },
  },
} satisfies Meta<typeof TimeRangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 80,
  },
};
