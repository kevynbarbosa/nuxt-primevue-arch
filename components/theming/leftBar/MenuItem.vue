<template>
  <li v-if="item.children == undefined">{{ item.label }}</li>
  <template v-else>
    <div>{{ item.label }}</div>
    <ul>
      <ThemingLeftBarMenuExpand v-for="child in item.children" :key="child.label" :item="child" />
    </ul>
  </template>
</template>

<script setup>
const props = defineProps(["item"]);
</script>
