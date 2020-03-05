<template>
  <section class="post-list">
    <PostPreview 
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.previewText"
      />
  </section>
</template>

<script>
import PostPreview from '@/components/PostPreview';

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

<style>

</style>