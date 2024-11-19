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
    imageUrl: {
      control: "text",
      description: "아이콘 URL",
      defaultValue: "",
    },
    rentType: {
      control: "text",
      description: "매물 유형",
      defaultValue: "월세",
    },
    price: {
      control: "text",
      description: "매물 가격",
      defaultValue: "1000/80",
    },
    timeRequired: {
      control: "number",
      description: "소요 시간",
      defaultValue: 35,
    },
    address: {
      control: "text",
      description: "주소",
      defaultValue: "서울시 중랑구 신내동 395-15",
    },
    typeInfo: {
      control: "text",
      description: "매물 유형 정보",
      defaultValue: "오피스텔, 3/10층",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PropertyListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "",
    rentType: "월세",
    price: "1000/100",
    timeRequired: 35,
    address: "서울시 중랑구 신내동 395-15",
    typeInfo: "오피스텔, 3/10층",
  },
};
