import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
// @ts-ignore
import { NsButton } from 'new-style-ui'
import 'new-style-ui/dist/index.css'

type Story = StoryObj<typeof NsButton> & { argTypes: ArgTypes }

const meta: Meta<typeof NsButton> = {
  title: 'Example/Button',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    icon: {
      control: 'text'
    }
  }
}

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' }
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
  },
  render: (args: any) => ({
    components: { NsButton },
    setup() {
      return { args }
    },
    template: `
      <ns-button v-bind="args">{{ args.content }}</ns-button>
    `
  })
}

export default meta
