import { createStore } from 'vuex'
import { IArticle } from '@/globals'

export default createStore({
  state: {
    API_KEY: '570b428919d34c2abce2c95a949390fd',
    selectedCountry: 'us',
    selectedCategory: 'general',
    articles: [] as IArticle[]
  },
  mutations: {
    populateArticles (state, payload: IArticle[]) {
      state.articles = [...payload]
    },
    clearArticles (state) {
      state.articles = []
    },
    changeSelectedCountry (state, payload:string) {
      state.selectedCountry = payload
    },
    changeSelectedCategory (state, payload:string) {
      state.selectedCategory = payload
    }
  }
})
 