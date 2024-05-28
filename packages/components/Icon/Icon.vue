<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'

import type { IconProps } from './types'

defineOptions({
  name: 'NsIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => ({
  color: props.color ? props.color : void 0
}))

defineExpose()
</script>

<template>
  <i
    class="ns-icon"
    :class="[props.type ? `ns-icon-${props.type}` : '']"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>
