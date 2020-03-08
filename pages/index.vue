<template>
  <div class="home">
    <post-list :posts="loadedPosts"></post-list>
  </div>
</template>

<script>
import PostList from '@/components/PostList';
import { db } from '@/plugins/firebase';

export default {
  data () {
    return {
      loadedPosts: []
    }
  },

  components: {
    PostList,
  },

  mounted () {
    db.collection('posts').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.loadedPosts.push(doc.data())
          console.log(doc.id, " => ", doc.data())
        })
      })
  }
}
</script>

<style scoped>

</style>
