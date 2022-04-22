<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="generated-text">
    <div class="card">
      <textarea class="form-control" v-model="text" />
    </div>
  </div>
</template>

<style scoped>
.generated-text {
  margin: 50px;
}
</style>
