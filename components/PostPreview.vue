<template>
  <div class="post-preview">
    <article>
      <div class="post-content">
        <p>{{ title }}</p>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </div>
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
  }
}
</script>

<style>

</style>