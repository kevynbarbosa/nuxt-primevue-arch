<template>
  <li v-if="item.children == undefined">{{ item.label }}</li>
  <template v-else>
    <li>
      <div>{{ item.label }}</div>
      <ul>
        <ThemingLeftBarMenuItem v-for="child in item.children" :key="child.label" :item="child" />
      </ul>
    </li>
  </template>
</template>

<script setup>
const props = defineProps(["item"]);
</script>
