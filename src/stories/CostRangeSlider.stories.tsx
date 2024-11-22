import type { Meta, StoryObj } from "@storybook/react";

import CostRangeSlider from "@/components/CostRangeSlider";

const meta = {
  title: "Components/CostRangeSlider",
  component: CostRangeSlider,
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
      defaultValue: 300000000, // 최대값을 9억으로 설정
    },
    type: {
      control: { type: "select", options: ["전세/매매/보증금", "월세"] }, // 슬라이더 유형 선택 추가
      description: "슬라이더 유형",
      defaultValue: "전세",
    },
  },
} satisfies Meta<typeof CostRangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 300000000,
    type: "전세/매매/보증금",
    value: [0, 300000000], // 기본 범위 값 설정
    onChange: values => console.log("Slider updated:", values), // 값 변경 로깅
  },
};

export const Rent: Story = {
  args: {
    min: 0,
    max: 3500000, // 월세 최대값
    type: "월세",
    value: [0, 3500000], // 월세 범위 값 설정
    onChange: values => console.log("Slider updated:", values), // 값 변경 로깅
  },
};
