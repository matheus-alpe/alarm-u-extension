<script lang="ts" setup>
import { ref, watch } from 'vue'
import { NTimePicker, NSwitch, NButton, NIcon, NInput } from 'naive-ui'
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
  <div>
    <div class="timer-row">
      <NSwitch
        size="small"
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

      <NButton
        quaternary
        circle
        type="error"
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
  </div>
</template>

<style lang="scss">
.timer-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
