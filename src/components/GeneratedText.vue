<script setup>
import { ref } from "vue";
import ToolBox from "./ToolBox.vue";
import QuestionComponent from "./QuestionComponent.vue";
defineProps({
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
</script>

<template>
  <div
    class="generated-text"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card">
      <textarea class="form-control" v-model="text" rows="3" />
      <div class="input-group-append">
        <tool-box :generate="generate" :inputs="text" />
      </div>
      <question-component v-if="hover" :inputs="text" :answer="answer" />
    </div>
  </div>
</template>

<style scoped>
.generated-text {
  margin: 50px;
}
</style>
