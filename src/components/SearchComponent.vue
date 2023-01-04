<template>
  <div class="search-component">
    <div class="input-search">
      <font-awesome-icon class="icon" icon="fa-magnifying-glass" />
      <input type="text" placeholder="Search..." @keyup.enter="$emit('user-search', inputVal)" v-model="inputVal"/>
    </div>
    <category-picker class="category"/>
    <country-picker class="country"/>
    <button @click="$emit('user-search', inputVal)" class="primary-btn">Search</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import CountryPicker from './CountryPicker.vue'
import CategoryPicker from './CategoryPicker.vue'

export default defineComponent({
  components: {
    CountryPicker,
    CategoryPicker
  },
  setup() {
    const inputVal = ref('')

    return {
      inputVal
    }
  }
})
</script>
