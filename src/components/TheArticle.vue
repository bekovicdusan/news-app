<template>
  <article class="article">
    <a class="headline" :href="article.url.toString()" target="blank">
      <h3>
        {{ article.title }}
      </h3>
    </a>
    <hr v-if="article.author" class="divider"/>
    <span v-if="article.author" class="author">
      by <strong>{{ article.author }}</strong>
    </span>
    <img class="image" :src="article.urlToImage?.toString()"/>
    <p class="content">
      {{ article.content?.split('[')[0] }}
    </p>
    <footer class="footer">
      <p class="timestamp">Published on {{ timestamp }}</p>
    </footer>
  </article >
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

import { IArticle } from '@/globals';

export default defineComponent({
  name: 'TheArticle',
  props: {
    article: {
      type: Object as PropType<IArticle>,
      required: true
    }
  },
  setup (props) {
    const timestamp = computed(() => {
      const date = new Date(props.article.publishedAt).toLocaleDateString('en-US')
      const time = new Date(props.article.publishedAt).toLocaleTimeString()
      const formattedTime = time.split(':')[0] + ':' + time.split(':')[1] + 'h'
      return date + ' at ' + formattedTime
    })

    return {
      timestamp
    }
  }
})
</script>
