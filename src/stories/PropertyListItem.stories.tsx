import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PropertyListItem from "@/components/PropertyListItem";

const meta = {
  title: "List/PropertyListItem",
  component: PropertyListItem,
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
    tradeType: {
      control: "text",
      description: "매물 유형",
      defaultValue: "월세",
    },
    price: {
      control: "text",
      description: "매물 보증금 가격",
      defaultValue: "1,000",
    },
    rentPrice: {
      control: "number",
      description: "매물 월세 가격",
      defaultValue: 80,
    },
    travelTime: {
      control: "number",
      description: "소요 시간",
      defaultValue: 35,
    },
    address: {
      control: "text",
      description: "주소",
      defaultValue: "서울시 중랑구 신내동 395-15",
    },
    houseType: {
      control: "text",
      description: "매물 유형 정보",
      defaultValue: "오피스텔, 3/10층",
    },
    floor: {
      control: "number",
      description: "층수",
      defaultValue: -1,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PropertyListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tradeType: "월세",
    price: "1,000",
    rentPrice: 80,
    travelTime: 35,
    address: "서울시 중랑구 신내동 395-15",
    houseType: "오피스텔, 3/10층",
    floor: -1,
  },
};
