<script setup>
import { ref } from "vue";

const inputs = ref("I dream of a world");
const question = ref("What's in your mind?");
defineProps({
  generate: {
    type: Function,
    required: true
  },
    answer: {
    type: Function,
    required: true
  },
    headline: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="input-component">
    <div class="card">
      <div class="card-body">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">What's in your mind?</span>
          </div>
          <textarea
            class="form-control"
            aria-label="With textarea"
            v-model="inputs"
          ></textarea>
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              v-on:click="() => generate(inputs)"
            >
              Schwafel
            </button>
            <button
              class="btn btn-outline-secondary"
              type="button"
              v-on:click="() => headline(inputs)"
            >
              >
            </button>
          </div>
        </div>
        <div class="input-group">
          <input class="form-control" v-model="question" />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              v-on:click="() => answer(question, inputs)"
            >
              ?
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.input-component {
}
</style>
