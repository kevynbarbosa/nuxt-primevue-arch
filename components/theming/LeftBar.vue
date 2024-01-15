<template>
  <div class="flex flex-column h-screen sticky top-0" :style="{ width: size + 'px' }">
    <ThemingLeftBarBrandButton :topBarSize="topBarSize" />

    <ThemingLeftBarMenuItems />

    <ThemingLeftBarUserButton />
  </div>
</template>

<script setup>
const props = defineProps(["size", "topBarSize"]);

const someVar = ref(null);

onMounted(() => {
  // Mounted
});
</script>
