<template>
  <div class="home">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/PostList';

export default {
  components: {
    PostList,
  },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
}
</script>

<style scoped>

</style>
