<script setup>
import { ref } from "vue";
defineProps({
  inputs: {
    type: String,
    required: false,
  },
  answer: {
    type: Function,
    required: false,
  },
});
const question = ref("What's in your mind?");
</script>

<template>
  <div class="question-component">
    <div class="input-group md-auto">
      <input
        class="form-control"
        v-model="question"
        v-on:keyup.enter.exact="() => answer(question, inputs)"
      />
      <div class="input-group-append">
        <button
          title="ask a question"
          class="btn btn-outline-secondary"
          type="button"
          v-on:click="() => answer(question, inputs)"
        >
          <font-awesome-icon icon="circle-question" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-component {
  max-width: 100%;
}
</style>
