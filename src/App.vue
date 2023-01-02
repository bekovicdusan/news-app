<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const API_Key = '570b428919d34c2abce2c95a949390fd';

    return {
      API_Key
    }
  },
})
</script>


<style lang="scss">
@import './styles/index.scss';
</style>
