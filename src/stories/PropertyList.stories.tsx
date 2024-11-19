import type { Meta, StoryObj } from "@storybook/react";

import PropertyList from "@/components/PropertyList";

const meta = {
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
  argTypes: {},
} satisfies Meta<typeof PropertyList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
