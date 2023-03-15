<script lang="ts" setup>
import { NH1, NIcon, NButton } from 'naive-ui'
import {
  ClockAlarm16Filled,
  AddCircle16Filled,
  Dismiss20Filled,
} from '@vicons/fluent'

defineEmits(['add', 'close'])
</script>

<template>
  <header>
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

    <NH1 class="logo">
      <NIcon
        :component="ClockAlarm16Filled"
        size="36"
      />

      Alarm U
    </NH1>

    <div>
      <NButton
        circle
        quaternary
        @click="$emit('close')"
      >
        <NIcon
          :component="Dismiss20Filled"
          size="24"
        />
      </NButton>
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin: 0;
}
</style>
