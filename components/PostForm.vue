<template>
  <form @submit="onSave">
    <AppControlInput v-model="editedPost.author">著者名</AppControlInput>
    <AppControlInput v-model="editedPost.title">タイトル</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">感想</AppControlInput>
    <AppButton type="submit">投稿</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">キャンセル</AppButton>
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput';
import AppButton from '@/components/UI/AppButton';

export default {
  components: {
    AppControlInput,
    AppButton,
  },

  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            previewText: ""
          }
    };
  },

  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push("/");
    }
  }
}
</script>

<style>

</style>