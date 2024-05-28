import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
// @ts-ignore
import { NsIcon } from 'new-style-ui'
import 'new-style-ui/dist/index.css'

type Story = StoryObj<typeof NsIcon> & { argTypes: ArgTypes }

const meta: Meta<typeof NsIcon> = {
  title: 'Example/Icon',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      defaultValue: 'spinner'
    },
    spin: {
      control: 'boolean'
    },
    bounce: {
      control: 'boolean'
    },
    shake: {
      control: 'boolean'
    },
    beat: {
      control: 'boolean'
    },
    fade: {
      control: 'boolean'
    },
    beatFade: {
      control: 'boolean'
    },
    spinPulse: {
      control: 'boolean'
    },
    spinReverse: {
      control: 'boolean'
    },
    swapOpacity: {
      control: 'boolean'
    }
  }
}

export const Default: Story & { args: { icon: string } } = {
  argTypes: {},
  args: {
    icon: 'spinner'
  },
  render: (args: any) => ({
    components: { NsIcon },
    setup() {
      return { args }
    },
    template: `
      <ns-icon v-bind="args"></ns-icon>
    `
  })
}

export default meta
