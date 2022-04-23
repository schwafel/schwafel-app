<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  generate: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="generated-text">
    <div class="card">
      <textarea class="form-control" v-model="text" rows="3" />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          v-on:click="() => generate(text)"
        >
          Schwafel
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.generated-text {
  margin: 50px;
}
</style>
