import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "@/components/TextInput";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
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
    label: {
      control: "text",
      description: "Label에 표시될 텍스트",
      defaultValue: "1. 회사 또는 학교를 입력해주세요.",
    },
    placeholder: {
      control: "text",
      description: "text 필드으 placeholder",
      defaultValue: "회사/학교",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "학교 또는 회사",
    },
    onChange: {
      action: "changed",
      description: "텍스트 필드 값 변경 이벤트",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "1. 회사 또는 학교를 입력해주세요.",
    placeholder: "회사/학교",
    value: "",
    onChange: () => {},
  },
};
