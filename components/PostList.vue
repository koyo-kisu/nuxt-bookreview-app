<template>
  <section class="post-list">
    <post-preview 
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :author="post.author"
      :text="post.text"
      ></post-preview >
  </section>
</template>

<script>
import PostPreview from '@/components/PostPreview';
import { db } from '@/plugins/firebase';

export default {
  name: 'PostList',

  components: {
    PostPreview,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>