<script setup>
import GeneratedText from "./GeneratedText.vue";
import { ref } from "vue";

const inputs = ref("I dream of a world");
const question = ref("What's in your mind?");
const generated_list = ref([]);
async function generate() {
  let url = "https://schwafel-worker.chriamue.net/generate";
  let data = { message: inputs.value };
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "omit",
    redirect: "follow",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((body) => {
      generated_list.value = [{ text: body.generated_text }].concat(
        generated_list.value
      );
    })
    .catch(console.log);
}

async function answer() {
  let url = "https://schwafel-worker.chriamue.net/answer";
  let data = { question: question.value, context: inputs.value };
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "omit",
    redirect: "follow",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((body) => {
      generated_list.value = [{ text: body.answer }].concat(
        generated_list.value
      );
    })
    .catch(console.log);
}
defineProps({});
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
              v-on:click="generate"
            >
              Schwafel
            </button>
          </div>
        </div>
        <div class="input-group">
          <input class="form-control" v-model="question" />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              v-on:click="answer"
            >
              ?
            </button>
          </div>
        </div>
      </div>
    </div>
    <generated-text
      v-for="(item, index) in generated_list"
      :text="item.text"
      :index="index"
      :key="index"
    ></generated-text>
  </div>
</template>

<style scoped>
.input-component {
}
</style>
