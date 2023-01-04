<template>
  <select name="countries" class="country-picker" :value="selectedCountry" @change="handleChange">
    <option v-for="country in countries" :key="country[0]" :value="country[0]">
      {{ country[1] }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

import store from '@/store'

export default defineComponent({
  setup() {
    const selectedCountry = computed(() => store.state.selectedCountry)

    const countries = ref([
      ['ae', 'United Arab Emirates'], ['ar', 'Argentina'], ['at', 'Austria'], ['au', 'Australia'], ['be', 'Belgium'], ['bg', 'Bulgaria'], ['br', 'Brazli'], ['ca', 'Canada'],
      ['ch', 'Switzerland'], ['cn', 'China'], ['co', 'Costa Rica'], ['cu', 'Cuba'], ['cz', 'Czech Republic'], ['de', 'Germany'], ['eg', 'Egypt'], ['fr', 'France'],
      ['gb', 'Great Britain'], ['gr', 'Greece'], ['hk', 'Hong Kong'], ['hu', 'Hungary'], ['id', 'Indonesia'], ['ie', 'Ireland'], ['il', 'Israel'], ['in', 'India'],
      ['it', 'Italy'], ['jp', 'Japan'], ['kr', 'Republic of Korea'], ['lt', 'Lithuania'], ['lv', 'Latvia'], ['ma', 'Morocco'], ['mx', 'Mexico'], ['my', 'Malaysia'],
      ['ng', 'Nigeria'], ['nl', 'Netherlands'], ['no', 'Norway'], ['nz', 'New Zealand'], ['ph', 'Philippines'], ['pl', 'Poland'], ['pt', 'Portugal'], ['ro', 'Romania'],
      ['rs', 'Serbia'], ['ru', 'Russia'], ['sa', 'Saudi Arabia'], ['se', 'Sweden'], ['sg', 'Singapore'], ['si', 'Slovenia'], ['sk', 'Slovakia'], ['th', 'Thailand'],
      ['tr', 'Turkey'], ['tw', 'Taiwan'], ['ua', 'Ukraine'], ['us', 'United States'], ['ve', 'Venezuela'], ['za', 'South Africa']
    ])

    const handleChange = (event: Event):void => {
      store.commit('changeSelectedCountry', (event.target as HTMLSelectElement).value)
    }

    return {
      selectedCountry,
      countries,

      handleChange
    }
  },
})
</script>
