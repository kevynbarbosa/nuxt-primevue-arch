<template>
  Auto-complete component

  <div class="card flex justify-content-center">
    <AutoComplete v-model="value" :suggestions="items" @complete="search" unstyled />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "theming",
});

const value = ref("");
const items = ref([]);

const search = (event) => {
  items.value = [...Array(10).keys()].map((item) => event.query + "-" + item);
};
</script>
