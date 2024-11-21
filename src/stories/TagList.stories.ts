import type { Meta, StoryObj } from "@storybook/react";

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
    isSingleSelect: {
      control: { type: "boolean" },
      description: "단일 선택 모드 여부",
      defaultValue: false,
    },
    onChange: {
      action: "onChange",
      description: "태그 선택 변경 핸들러",
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["아파트", "오피스텔", "빌라"],
  },
};

export const SingleSelect: Story = {
  args: {
    tagList: ["시간", "예산"],
    isSingleSelect: true,
  },
};
