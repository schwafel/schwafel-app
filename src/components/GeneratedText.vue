<script setup>
import ToolBox from "./ToolBox.vue";
defineProps({
  text: {
    type: String,
    required: true,
  },
  generate: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="generated-text">
    <div class="card">
      <textarea class="form-control" v-model="text" rows="3" />
      <div class="input-group-append">
        <tool-box :generate="generate" :inputs="inputs" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.generated-text {
  margin: 50px;
}
</style>
