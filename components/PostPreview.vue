<template>
  <nuxt-link class="post-preview" :to="postLink">
    <article>
      <div class="post-content">
        <p>{{ title }}</p>
        <p>{{ author }}</p>
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
    author: {
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

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 60%;
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: black;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>