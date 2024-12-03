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
    value: {
      control: false,
      description: "현재 선택된 슬라이더 값",
    },
    onChange: {
      action: "onChange",
      description: "슬라이더 값 변경 핸들러",
    },
  },
} satisfies Meta<typeof TimeRangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 80,
    value: 0, // 초기 값 설정
    onChange: values => console.log("Slider values changed:", values), // 슬라이더 변경 시 동작 정의
  },
};
