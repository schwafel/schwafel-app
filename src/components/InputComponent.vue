<script setup>
import { ref } from "vue";

const inputs = ref("I dream of a");
const generated_text = ref("");
async function generate() {
  let url = "https://schwafel-worker.chriamue.net/generate";
  let data = { message: inputs.value };
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "omit",
    redirect: "follow",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((body) => {
      generated_text.value = body.generated_text;
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
      </div>
    </div>
    <textarea class="form-control" v-model="generated_text" />
  </div>
</template>

<style scoped>
.input-component {
}
</style>
