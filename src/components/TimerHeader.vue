<script lang="ts" setup>
import { NH1, NIcon, NButton } from 'naive-ui'
import { ClockAlarm16Filled, Dismiss20Filled } from '@vicons/fluent'

const emit = defineEmits(['close'])

const CHROME_HOST = 'chrome-extension://'

function closeAction() {
  const URL =
    window.location != window.parent.location
      ? document.referrer
      : document.location.href

  if (URL.includes(CHROME_HOST)) {
    window.close()
    return
  }

  emit('close')
}
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

    <div>
      <NButton
        circle
        quaternary
        @click="closeAction"
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
