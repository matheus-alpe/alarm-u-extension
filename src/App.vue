<script lang="ts" setup>
import { reactive } from 'vue'
import { NConfigProvider, darkTheme } from 'naive-ui'

import Header from './components/TimerHeader.vue'
import TimerItem from './components/TimerItem.vue'

type Alarm = {
  id: string
  active: boolean
  time: string
  title: string
  url?: string
}

const timers = reactive<Alarm[]>([])

function addTimer() {
  timers.push({
    id: '1',
    active: true,
    time: '21:20',
    title: 'teste',
  })
}
</script>

<template>
  <NConfigProvider
    :theme="darkTheme"
    class="container"
  >
    <Header @add="addTimer" />

    <ul v-if="timers.length">
      <TimerItem
        v-for="timer in timers"
        :key="timer.id"
      />
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
