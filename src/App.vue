<script setup>
import { ref } from "vue";
import InputComponent from "./components/InputComponent.vue";
import GeneratedText from "./components/GeneratedText.vue";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
const generated_list = ref([]);
const loading = ref(false);
const generate = async (message) => {
  loading.value = true;
  let url = "https://schwafel-worker.chriamue.net/generate";
  let data = { message };
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
    .catch(console.log)
    .finally(() => (loading.value = false));
};
const answer = async (question, context) => {
  loading.value = true;
  let url = "https://schwafel-worker.chriamue.net/answer";
  let data = { question, context };
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
    .catch(console.log)
    .finally(() => (loading.value = false));
};
const headline = async (message) => {
  loading.value = true;
  let url = "http://schwafel-worker.chriamue.net/headline";
  let data = { message };
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
    .catch(console.log)
    .finally(() => (loading.value = false));
};
</script>

<template>
  <header>
    <pacman-loader :loading="loading"></pacman-loader>
  </header>

  <main>
    <InputComponent
      :generate="generate"
      :answer="answer"
      :headline="headline"
    />
    <generated-text
      v-for="(item, index) in generated_list"
      :text="item.text"
      :generate="generate"
      :index="index"
      :key="index"
    ></generated-text>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 90%;
  margin: 0 auto;

  font-weight: normal;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    align-items: center;
  }

  #app {
    display: grid;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
