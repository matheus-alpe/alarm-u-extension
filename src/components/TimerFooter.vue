<script lang="ts" setup>
import { NIcon, NButton } from 'naive-ui'
import { AddCircle16Filled } from '@vicons/fluent'
import Sponsors from './Sponsors.vue'

defineEmits(['add'])
</script>

<template>
  <div class="footer">
    <Sponsors />

    <NButton
      dashed
      circle
      type="primary"
      @click="$emit('add')"
    >
      <NIcon
        :component="AddCircle16Filled"
        size="24"
      />
    </NButton>
  </div>
</template>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
