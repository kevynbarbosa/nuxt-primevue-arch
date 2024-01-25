<template>
  <li v-if="item.children == undefined" class="nav-item cursor-pointer p-ripple">
    <i class="pi pi-times" style="font-size: 1rem"></i>
    <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
    (item)
  </li>
  <template v-else>
    <li class="nav-menu-li">
      <div>{{ item.label }} (menu-li)</div>
      <ul class="nav-menu-ul">
        <ThemingLeftBarMenuItem v-for="child in item.children" :key="child.label" :item="child" />
      </ul>
    </li>
  </template>
</template>

<script setup>
const props = defineProps(["item"]);
</script>

<style scoped>
.nav-item {
  padding: 12px 8px;
}

.nav-item:hover {
  background-color: bisque;
}

.nav-menu-li {
  font-style: "Poppins";
  font-size: 12px;
  padding: 12px 8px;
  /* background-color: ; */
}

.nav-menu-li:hover {
  background-color: bisque;
}

.nav-menu-ul {
  list-style-type: none;
  padding: 12px 8px;
  border-style: none none none dashed;
}
/* 
.nav-menu-ul:hover {
  background-color: bisque;
} */
</style>
