import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TopListItem from "@/components/TopListItem";

const meta = {
  title: "List/TopListItem",
  component: TopListItem,
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
    rank: {
      control: "number",
      description: "TopListItem에서 랭킹",
      defaultValue: 1,
    },
    region: {
      control: "text",
      description: "TopListItem에서 지역명",
      defaultValue: "군포시 재정동",
    },
    description: {
      control: "text",
      description: "TopListItem에서 지역에 대한 매물 갯수 정보",
      defaultValue: "13개의 매물이 있습니다.",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TopListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rank: 1,
    region: "군포시 재정동",
    description: "13개의 매물이 있습니다.",
  },
};
