import { createStore } from 'vuex'
import { IArticle } from '@/globals'

export default createStore({
  state: {
    articles: [] as IArticle[]
  },
  getters: {
  },
  mutations: {
    populateArticles (state, payload: IArticle[]) {
      state.articles = [...payload]
    }
  },
  actions: {
  },
  modules: {
  }
})
 