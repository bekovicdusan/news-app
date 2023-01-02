<template>
  <article class="article">
    <a class="headline" :href="article.url.toString()" target="blank">
      <h3>
        {{ article.title }}
      </h3>
    </a>
    <img class="image" :src="article.urlToImage?.toString()"/>
    <p class="content">
      {{ article.content?.split('[')[0] }}
    </p>
    <footer class="footer">
      <p class="timestamp">Published at {{ timestamp }}</p>
    </footer>
  </article >
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

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
    const timestamp = new Date(props.article.publishedAt).toLocaleDateString()

    return {
      timestamp
    }
  }
})
</script>
