<template>
  <div class="home">
    <search-component @user-search="handleSearch" />
    <div v-if="isDataFetched">
      <div class="pagination-wrapper">
        <VPagination
          v-if="totalPages"
          v-model="page"
          :pages="totalPages"
          :range-size="1"
          active-color="#DCEDFF"
        />
      </div>
      <div class="article-wrapper" v-if="articlesToShow.length > 0">
        <the-article v-for="article in articlesToShow" :key="article.publishedAt" :article="article"/>
      </div>
      <div class="no-articles" v-else-if="!hasError">
        <p>
          No articles found.
        </p>
      </div>
      <div class="error" v-if="hasError">
        <p>
          There's been an error. Please try a different search or reload the page.
        </p>
      </div>
    </div>
    <div v-else>
      <loading-spinner />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onUnmounted, ref } from 'vue'
import axios from 'axios'
import VPagination from '@hennge/vue3-pagination'
import "@hennge/vue3-pagination/dist/vue3-pagination.css"

import store from '@/store'

import TheArticle from '@/components/TheArticle.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    TheArticle,
    SearchComponent,
    LoadingSpinner,
    VPagination
  },
  setup () {
    const page = ref(1)
    const isDataFetched = ref(false)
    const hasError = ref(false)
    
    const API_KEY = computed(() => store.state.API_KEY)
    const selectedCountry = computed(() => store.state.selectedCountry)
    const selectedCategory = computed(() => store.state.selectedCategory)
    const articles = computed(() => store.state.articles)
    const articlesToShow = computed(() => articles.value.slice(page.value === 1 ? 0 : ((page.value - 1) * 10), page.value * 10))
    const totalPages = computed(() => Math.ceil(articles.value.length / 10))


    const getTopHeadlines = ():Promise<any> => (axios.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=100&page=1&apiKey=570b428919d34c2abce2c95a949390fd'))

    const handleSearch = (inputVal: string):void => {
      isDataFetched.value = false
      hasError.value = false
      page.value = 1
      let keyword = ''
      if (inputVal !== '') {
        keyword = '&q=' + inputVal
      }
      axios
        .get(`https://newsapi.org/v2/top-headlines?country=${selectedCountry.value}${keyword}&category=${selectedCategory.value}&pageSize=100&page=1&apiKey=${API_KEY.value}`)
        .then(result => {
          isDataFetched.value = true
          store.commit('populateArticles', result.data.articles)
        })
        .catch(err => {
          isDataFetched.value = true
          hasError.value = true
          throw err
        })
    }

    onMounted(() => {
      getTopHeadlines()
        .then(result => {
          isDataFetched.value = true
          store.commit('populateArticles', result.data.articles)
          console.log(result)
        })
        .catch(err => {
          isDataFetched.value = true
          hasError.value = true
          throw err
        })
    })

    onUnmounted(() => {
      store.commit('clearArticles')
    })

    return {
      articlesToShow,
      page,
      isDataFetched,
      hasError,
      totalPages,

      getTopHeadlines,
      handleSearch
    }
  }
});
</script>
