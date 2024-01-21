<template>
  <li v-if="item.children == undefined" class="nav-item">
    <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
  </li>
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

<style scoped></style>
