import type { Meta, StoryObj } from "@storybook/react";

import TopList from "@/components/TopList";

const meta = {
  title: "List/TopList",
  component: TopList,
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
  argTypes: {},
} satisfies Meta<typeof TopList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
