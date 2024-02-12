<template>
  <div
    class="px-4 fixed flex justify-content-between align-items-center border-bottom-1 surface-border surface-0"
    style="height: 60px; z-index: 1000; width: -webkit-fill-available"
  >
    <Button icon="pi pi-bars" text rounded />

    <!-- <IconField iconPosition="left">
      <InputIcon>
        <i class="pi pi-search" />
      </InputIcon>
      <InputText v-model="pesquisar" placeholder="Pesquisar" />
    </IconField> -->

    <IconField>
      <InputIcon>
        <i class="pi pi-spin pi-spinner" />
      </InputIcon>
      <InputText v-model="pesquisar" />
    </IconField>

    <div>
      <Button icon="pi pi-bell" text rounded />
      <Button icon="pi pi-sign-out" text rounded />
    </div>
  </div>
</template>

<script setup>
const pesquisar = ref("");
</script>
