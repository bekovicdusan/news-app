<template>
  <select class="sort-picker" :value="selectedCategory" @change="handleChange">
    <option v-for="option in sortOptions" :key="option[0]" :value="option[0]">
      {{ option[1] }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import store from '@/store'

export default defineComponent({
  setup() {
    const sortOptions = [
      ['business', 'Business'],
      ['entertainment', 'Entertainment'],
      ['general', 'General'],
      ['health', 'Health'],
      ['science', 'Science'],
      ['sports', 'Sports'],
      ['technology', 'Technology']
    ]

    const selectedCategory = computed(() => store.state.selectedCategory)

    const handleChange = (event: Event):void => {
      store.commit('changeSelectedCategory', (event.target as HTMLSelectElement).value)
    }

    return {
      sortOptions,
      selectedCategory,

      handleChange
    }
  },
})
</script>
