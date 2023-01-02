<template>
  <div class="home">
    <search-component />
    <the-article />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheArticle from '@/components/TheArticle.vue'
import SearchComponent from '@/components/SearchComponent.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    TheArticle,
    SearchComponent
  },
});
</script>
