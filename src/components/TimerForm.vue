<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NIcon } from 'naive-ui'
import { AddCircle16Filled } from '@vicons/fluent'
import TimerItem from './TimerItem.vue'

const showForm = ref(false)
</script>

<template>
  <div class="form-timer">
    <form v-if="showForm">
      <TimerItem />
    </form>

    <NButton
      v-else
      dashed
      type="primary"
      @click="showForm = true"
    >
      <NIcon
        :component="AddCircle16Filled"
        size="24"
      />
    </NButton>
  </div>
</template>

<style lang="scss">
.form-timer {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 10px;
}
</style>
