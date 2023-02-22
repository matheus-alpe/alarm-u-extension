<script lang="ts" setup>
  import { NH1, NIcon } from 'naive-ui'
  import { ClockAlarm16Filled } from '@vicons/fluent'
</script>

<template>
  <header>
    <NH1 class="logo">
      <NIcon
        :component="ClockAlarm16Filled"
        size="36"
      />

      Alarm U
    </NH1>
  </header>
</template>

<style>
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
  }
</style>
