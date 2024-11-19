import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TagList from "../components/TagList";

const meta = {
  title: "Components/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: {
      control: { type: "object" },
      description: "태그 리스트",
    },
  },
  args: { onTagClick: fn() },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["아파트", "오피스텔", "빌라"],
  },
};
