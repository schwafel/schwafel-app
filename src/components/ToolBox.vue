<script setup>
defineProps({
  inputs: {
    type: String,
    required: false,
  },
  generate: {
    type: Function,
    required: false,
  },
  answer: {
    type: Function,
    required: false,
  },
  headline: {
    type: Function,
    required: false,
  },
  summarize: {
    type: Function,
    required: false,
  },
});
</script>

<template>
  <div class="tool-box">
    <button
      v-if="generate"
      title="generate some text"
      class="btn btn-outline-secondary"
      type="button"
      v-on:click="() => generate(inputs)"
    >
      <font-awesome-icon icon="robot" />
      Schwafel
    </button>
    <button
      v-if="headline"
      title="generate headline"
      class="btn btn-outline-secondary"
      type="button"
      v-on:click="() => headline(inputs)"
    >
      <font-awesome-icon icon="newspaper" />
    </button>
    <button
      v-if="summarize"
      title="generate summary"
      class="btn btn-outline-secondary"
      type="button"
      v-on:click="() => summarize(inputs)"
    >
      TLDR;
    </button>
  </div>
</template>

<style scoped>
.tool-box {
  display: flex;
  flex-direction: column;
}
</style>
