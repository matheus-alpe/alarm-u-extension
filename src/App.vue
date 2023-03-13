<script lang="ts" setup>
import { reactive, onBeforeMount } from 'vue'
import { NConfigProvider, darkTheme } from 'naive-ui'

import { storage, emitMessage, uuid } from './utils'

import Header from './components/TimerHeader.vue'
import TimerItem from './components/TimerItem.vue'

const timers = reactive<Alarm[]>([])

async function addTimer() {
  timers.push({
    id: uuid.generate(),
    active: false,
    time: undefined,
    title: undefined,
    url: undefined,
  })

  await storage.set('timers', timers)
}

async function updateTimer(index: number, formData: Alarm) {
  const selectedTimer = timers[index]

  Object.entries(formData).forEach(([key, value]) => {
    selectedTimer[key as keyof Alarm] = value as any
  })

  await storage.set('timers', timers)
}

async function removeTimer(index: number) {
  timers.splice(index, 1)
  await storage.set('timers', timers)
}

onBeforeMount(async () => {
  if (process.env.NODE_ENV !== 'development') {
    const response = await storage.get<object>('timers')
    const timersList = Object.values(response) as Alarm[]
    timersList && timersList.forEach((timer) => timers.push(timer))
    return
  }

  const storageTimers = await storage.get<Alarm[]>('timers')
  storageTimers && storageTimers.forEach((timer) => timers.push(timer))
})
</script>

<template>
  <NConfigProvider
    :theme="darkTheme"
    class="container"
  >
    <Header
      @add="addTimer"
      @close="emitMessage('close-modal')"
    />

    <ul v-if="timers.length">
      <li
        v-for="(timer, index) in timers"
        :key="index"
      >
        <TimerItem
          :timer="timer"
          @update="(formData) => updateTimer(index, formData)"
          @remove="removeTimer(index)"
        />
      </li>
    </ul>
  </NConfigProvider>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  gap: 10px;
}
</style>
