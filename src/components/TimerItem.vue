<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { NTimePicker, NSwitch, NButton, NIcon } from 'naive-ui'
  import { ClockDismiss20Regular } from '@vicons/fluent'

  const time = ref(null)
  const isEnable = ref(false)

  watch(time, () => {
    isEnable.value = !!time.value
  })

  function handleClick() {
    if (!time.value) return
    time.value = null
  }
</script>

<template>
  <div class="timer-item">
    <NSwitch
      size="small"
      v-model:value="isEnable"
      :disabled="!time"
    />

    <NTimePicker
      v-model:value="time"
      format="h:mm a"
    />

    <NButton
      quaternary
      circle
      type="error"
      @click="handleClick"
      :disabled="!time"
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

<style>
  .timer-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
