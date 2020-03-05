<template>
  <nuxt-link class="post-preview" :to="postLink">
    <article>
      <div class="post-content">
        <p>{{ title }}</p>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return  '/posts/' + this.id
    }
  }
}
</script>

<style>

</style>