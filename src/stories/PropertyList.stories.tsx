import type { Meta, StoryObj } from "@storybook/react";

import PropertyList from "@/components/PropertyList";

const meta: Meta<typeof PropertyList> = {
  title: "List/PropertyList",
  component: PropertyList,
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
    address: {
      control: "text",
      description: "주소",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PropertyList>;

export const Default: Story = {
  args: {
    address: "서울특별시 강남구",
  },
};
