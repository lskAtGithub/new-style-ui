<script setup lang="ts">
import { NsButton } from 'new-style-ui';

</script>

<template>
  <div class="container">
    <ns-button size="small">base button</ns-button>
    <ns-button size="large" type="primary">primary button</ns-button>
    <ns-button type="success">success button</ns-button>
    <ns-button type="warning">warning button</ns-button>
    <ns-button type="danger">danger button</ns-button>
  </div>
</template>

<style scoped>
.container {
  padding: 80px;
  text-align: center;
}
</style>
