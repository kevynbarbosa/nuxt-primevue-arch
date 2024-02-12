<template>
  <div class="min-h-screen flex surface-ground">
    <SystemLeftBar :size="leftBarSize" :topBarSize="topBarSize"></SystemLeftBar>

    <div class="min-h-screen flex flex-column flex-auto">
      <SystemTopBar></SystemTopBar>

      <div class="h-full bg-[#edf1f6]" :style="{ 'margin-top': topBarSize + 'px' }">
        <div class="h-full p-2 flex flex-column flex-auto">
          <div class="surface-border border-round surface-section flex-auto">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([]);

const leftBarSize = 300;
const topBarSize = 60;
</script>
