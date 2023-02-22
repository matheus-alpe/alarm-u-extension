<script lang="ts" setup>
  import { AddCircle16Filled } from '@vicons/fluent'
  import TimerItem from './TimerItem.vue'
</script>

<template>
  <form>
    <TimerItem />

    <NButton
      dashed
      type="primary"
    >
      <NIcon
        :component="AddCircle16Filled"
        size="24"
      />
    </NButton>
  </form>
</template>

<style></style>
