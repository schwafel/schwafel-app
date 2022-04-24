<script setup>
import { ref } from "vue";
import ToolBox from "./ToolBox.vue";
import QuestionComponent from "./QuestionComponent.vue";
const inputs = ref("I dream of a world");
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
        <div class="input-group input-group-lg">
          <textarea
            class="form-control"
            rows="5"
            cols="80"
            v-model="inputs"
            @focus="$event.target.select()"
            v-on:keyup.enter.exact="() => generate(inputs)"
          ></textarea>
          <div class="input-group-append">
            <div class="buttons">
              <tool-box
                :inputs="inputs"
                :generate="generate"
                :answer="answer"
                :headline="headline"
                :summarize="summarize"
              />
            </div>
          </div>
        </div>
        <question-component :inputs="inputs" :answer="answer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-component {
  width: 90%;
}
</style>
