<script lang="ts" setup>
import { ref, watch } from 'vue'
import { NTimePicker, NSwitch, NButton, NIcon, NInput } from 'naive-ui'
import {
  ClockDismiss20Regular,
  Link20Filled,
  LinkDismiss20Filled,
} from '@vicons/fluent'

const time = ref(null)
const isEnable = ref(false)

watch(time, () => {
  isEnable.value = !!time.value
})

function handleClick() {
  if (!time.value) return
  time.value = null
}

const showURLInput = ref(false)
</script>

<template>
  <div class="timer-row">
    <NSwitch
      size="small"
      title="Active alarm"
      v-model:value="isEnable"
      :disabled="!time"
    />

    <NTimePicker
      class="time-input"
      v-model:value="time"
      format="h:mm a"
      placeholder="Time"
    />

    <NInput placeholder="Title" />

    <NInput
      v-if="showURLInput"
      placeholder="URL"
    />

    <NButton
      quaternary
      circle
      title="Add URL redirect"
      :type="showURLInput ? 'error' : 'default'"
      @click="showURLInput = !showURLInput"
    >
      <template #icon>
        <NIcon
          :component="showURLInput ? LinkDismiss20Filled : Link20Filled"
          size="18"
        />
      </template>
    </NButton>

    <NButton
      quaternary
      circle
      type="error"
      title="Remove alarm"
      @click="handleClick"
    >
      <template #icon>
        <NIcon
          :component="ClockDismiss20Regular"
          size="18"
        />
      </template>
    </NButton>
  </div>
</template>

<style lang="scss">
.timer-row {
  display: grid;
  grid-template-columns: min-content 110px 1fr;
  grid-auto-flow: column;
  align-items: center;
  gap: 10px;
}
</style>
