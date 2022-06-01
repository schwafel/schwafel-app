<script setup>
import { ref } from "vue";
import ToolBox from "./ToolBox.vue";
import QuestionComponent from "./QuestionComponent.vue";
const props = defineProps({
  origin: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  generate: {
    type: Function,
    required: true,
  },
  answer: {
    type: Function,
    required: true,
  },
});
const hover = ref(false);
const copyText = () => {
  navigator.clipboard.writeText(props.text);
};
</script>

<template>
  <div
    class="generated-text"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card">
      <textarea
        class="form-control"
        v-if="hover && origin"
        v-model="origin"
        rows="1"
        title="origin text"
      />
      <textarea
        class="form-control"
        v-model="text"
        rows="3"
        v-on:dblclick="copyText"
        title="doubleclick for copy to clipboard"
      />
      <div class="input-group-append">
        <tool-box :generate="generate" :inputs="text" />
      </div>
      <question-component v-if="hover" :inputs="text" :answer="answer" />
    </div>
  </div>
</template>

<style scoped></style>
