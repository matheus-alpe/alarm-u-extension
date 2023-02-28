<script lang="ts" setup>
import { reactive, onBeforeMount } from 'vue'
import { NConfigProvider, darkTheme } from 'naive-ui'

import { storage } from './utils'

import Header from './components/TimerHeader.vue'
import TimerItem from './components/TimerItem.vue'

const timers = reactive<Alarm[]>([])

async function addTimer() {
  timers.push({
    active: true,
    time: '23:23',
  })

  await storage.set('timers', timers)
}

onBeforeMount(async () => {
  const storageTimers = await storage.get<Alarm[]>('timers')
  storageTimers && storageTimers.forEach((timer) => timers.push(timer))
})
</script>

<template>
  <NConfigProvider
    :theme="darkTheme"
    class="container"
  >
    <Header @add="addTimer" />

    <ul v-if="timers.length">
      <li
        v-for="(timer, index) in timers"
        :key="index"
      >
        <TimerItem :timer="timer" />
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
