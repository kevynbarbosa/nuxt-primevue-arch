<template>
  <div class="min-h-screen flex relative surface-ground">
    <SystemLeftBar :size="leftBarSize" :topBarSize="topBarSize"></SystemLeftBar>

    <div class="min-h-screen flex flex-column relative flex-auto bg-primary">
      <div class="fixed w-full z-1">
        <SystemTopBar></SystemTopBar>
      </div>

      <div :style="{ 'margin-top': topBarSize + 'px' }">
        <SystemContentMock></SystemContentMock>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([]);

const leftBarSize = 300;
const topBarSize = 60;
</script>
