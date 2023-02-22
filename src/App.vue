<script lang="ts" setup>
  import { NConfigProvider, darkTheme } from 'naive-ui'
  import Header from './components/Header.vue'
  import TimerForm from './components/TimerForm.vue'
  import TimerItem from './components/TimerItem.vue'
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <Header />

    <ul>
      <TimerItem />
      <TimerItem />
    </ul>

    <TimerForm />
  </NConfigProvider>
</template>

<style>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  gap: 10px;
  margin-bottom: 10px;
}
</style>