<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { debounce } from '../utils'
import { NTimePicker, NSwitch, NButton, NIcon, NInput } from 'naive-ui'
import {
  ClockDismiss20Regular,
  Link20Filled,
  LinkDismiss20Filled,
} from '@vicons/fluent'

const { timer } = defineProps<{ timer: Alarm }>()
const emit = defineEmits(['update', 'remove'])

const formData = reactive<Alarm>({})
const showURLInput = ref(false)

if (timer) {
  watch(
    timer,
    () => {
      Object.entries(timer).forEach(([key, value]) => {
        formData[key as keyof Alarm] = value as any
      })
      if (!timer.url) return
      showURLInput.value = true
    },
    {
      immediate: true,
    }
  )
}

watch(formData, () => {
  if (!formData.time) {
    formData.active = !!formData.time
  }

  if (showURLInput.value && URLInputStatus.value === 'error') return
  submit()
})

function toggleURLInput() {
  timer.url = undefined
  showURLInput.value = !showURLInput.value
}

const submit = debounce(() => emit('update', formData))

const URLInputStatus = computed(() => {
  const validURL = formData.url && /https?\:\/\//.test(formData.url)
  return validURL ? 'success' : 'error'
})
</script>

<template>
  <div class="timer-row">
    <NSwitch
      size="small"
      title="Active alarm"
      v-model:value="formData.active"
      :disabled="!formData.time"
    />

    <NTimePicker
      class="time-input"
      v-model:formatted-value="formData.time"
      @update:formatted-value="formData.active = !!formData.time"
      format="HH:mm"
      placeholder="Time"
    />

    <NInput
      v-model:value="formData.title"
      placeholder="Title"
    />

    <NInput
      v-if="showURLInput"
      v-model:value="formData.url"
      :status="URLInputStatus"
      placeholder="URL"
    />

    <NButton
      quaternary
      circle
      :title="showURLInput ? 'Remove URL' : 'Add URL to redirect'"
      :type="showURLInput ? 'error' : 'default'"
      @click="toggleURLInput"
    >
      <template #icon>
        <NIcon
          :component="showURLInput ? LinkDismiss20Filled : Link20Filled"
          size="18"
        />
      </template>
    </NButton>
    <!-- 
  TODO: change icon to a trashcan
  TODO: remove index bug
 -->
    <NButton
      quaternary
      circle
      type="error"
      title="Remove alarm"
      @click="$emit('remove')"
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
