<template>
  <div class="home">
    <search-component />
    <div class="article-wrapper" v-if="articles.length > 0" >
      <the-article v-for="article in articlesToShow" :key="article.publishedAt" :article="article"/>
    </div>
    <div class="pagination-wrapper">
      <VPagination
        v-model="page"
        :pages="2"
        :range-size="1"
        active-color="#DCEDFF"
        @update:model-value="updateHandler"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue'
import axios from 'axios'
import VPagination from '@hennge/vue3-pagination'
import "@hennge/vue3-pagination/dist/vue3-pagination.css"

// import { IArticle } from '@/globals'

import store from '@/store'

import TheArticle from '@/components/TheArticle.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import { IArticle } from '@/globals'

export default defineComponent({
  name: 'HomeView',
  components: {
    TheArticle,
    SearchComponent,
    VPagination
  },
  setup () {
    const page = ref(1)

    const articles = computed(() => store.state.articles)
    const articlesToShow = computed(() => articles.value.slice(page.value === 1 ? 0 : ((page.value - 1) * 10), page.value * 10))

    const getTopHeadlines = ():Promise<any> => (axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=570b428919d34c2abce2c95a949390fd'))
    const updateHandler = ():void => {
      console.log(page.value, 'page')
      console.log(page.value === 1 ? 0 : (((page.value - 1) * 10) - 1), 'calc')
    }

    onMounted(() => {
      getTopHeadlines()
        .then(result => {
          store.commit('populateArticles', result.data.articles)
          console.log(result)
        })
    })

    return {
      articles,
      articlesToShow,
      page,

      getTopHeadlines,
      updateHandler
    }
  }
});
</script>
