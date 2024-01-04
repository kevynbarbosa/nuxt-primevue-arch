<template>
  <div class="flex justify-content-center p-4">
    <div>
      <Button label="Submit teste" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps([]);

const date = ref(null);

onMounted(() => {
  // Mounted
});
</script>

<style scoped>
:deep(.p-button) {
  background-image: linear-gradient(135.89deg, #d03355 -5.11%, #fb7a6b 97.89%);
  border-radius: 50px;
  border-style: hidden;
  /* transition: background 1s ease-out; */
}

:deep(.p-button:hover) {
  /* background: linear-gradient(135.89deg, #fb7a6b -5.11%, #d03355 97.89%); */
  background-position: revert;
}

/* linear-gradient(135.89deg, #D03355 -5.11%, #FB7A6B 97.89%) */
</style>
