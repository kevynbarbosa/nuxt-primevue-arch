<template>
  <div
    class="flex flex-column md:flex-row md:justify-content-between row-gap-3"
  >
    <Button type="button" label="Button 1"></Button>
    <Calendar v-model="date" />
    <!-- <Button type="button" label="Button 2" severity="secondary"></Button> -->
    <Button type="button" label="Button 3" severity="help"></Button>
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
