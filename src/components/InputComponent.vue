<script setup>
import { ref } from "vue";

const inputs = ref("I dream of a world");
const question = ref("What's in your mind?");
defineProps({
  generate: {
    type: Function,
    required: true,
  },
  answer: {
    type: Function,
    required: true,
  },
  headline: {
    type: Function,
    required: true,
  },
  summarize: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="input-component">
    <div class="card bg-light md-2">
      <div class="card-header">What's in your mind?</div>
      <div class="card-body">
        <div class="input-group md-auto">
          <textarea
            class="form-control"
            rows="5"
            cols="80"
            v-model="inputs"
            v-on:keyup.enter.exact="() => generate(inputs)"
          ></textarea>
          <div class="input-group-append">
            <div class="buttons">
              <button
                title="generate some text"
                class="btn btn-outline-secondary"
                type="button"
                v-on:click="() => generate(inputs)"
              >
                <font-awesome-icon icon="robot" />
                Schwafel
              </button>
              <button
                title="generate headline"
                class="btn btn-outline-secondary"
                type="button"
                v-on:click="() => headline(inputs)"
              >
                <font-awesome-icon icon="newspaper" />
              </button>
              <button
                title="generate summary"
                class="btn btn-outline-secondary"
                type="button"
                v-on:click="() => summarize(inputs)"
              >
                TLDR;
              </button>
            </div>
          </div>
        </div>
        <div class="input-group">
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
    </div>
  </div>
</template>

<style scoped>
.input-component {
  width: 90%;
}
input {
  max-width: 100%;
}
.buttons {
  display: flex;
  flex-direction: column;
}
</style>
