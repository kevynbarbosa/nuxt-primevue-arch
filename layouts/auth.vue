<template>
  <div class="bg-primary bg-image min-h-screen min-w-screen flex align-items-center justify-content-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-3">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style>
body {
  margin: 0;
}

.bg-image {
  background-image: url("/images/blocks/logos/background-buildings.jpg");
  background-size: cover;
}
</style>
