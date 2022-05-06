<script setup>
import { ref } from "vue";
import ToolBox from "./ToolBox.vue";
import QuestionComponent from "./QuestionComponent.vue";
const props = defineProps({
  title: {
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
    class="template-text"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
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

<style scoped>
.card-title {
  font-size: medium;
}
.form-control {
  font-size: small;
}
</style>
