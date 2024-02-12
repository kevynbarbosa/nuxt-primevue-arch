<template>
  <div class="bg-primary bg-image min-h-screen min-w-screen flex justify-content-end">
    <div class="surface-card px-4 w-full lg:w-30rem min-h-full flex flex-column justify-content-center">
      <div class="text-center">
        <img src="/images/blocks/logos/frontend-engine-logo.png" alt="Image" height="50" class="mb-3" />
      </div>
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
