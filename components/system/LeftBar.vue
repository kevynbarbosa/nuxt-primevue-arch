<template>
  <div class="flex flex-column h-screen sticky top-0" :style="{ width: size + 'px' }">
    <SystemLeftBarBrandButton />

    <div class="overflow-y-auto">
      <SystemLeftBarMenuSection name="SECTION PROP">
        <SystemLeftBarMenuDropdown name="Menu 1">
          <SystemLeftBarMenuItem name="Sub Item" />
          <SystemLeftBarMenuDropdown name="Sub menu 2">
            <SystemLeftBarMenuItem name="Sub Item" />
          </SystemLeftBarMenuDropdown>
        </SystemLeftBarMenuDropdown>

        <SystemLeftBarMenuItem name="Item" />
      </SystemLeftBarMenuSection>
    </div>

    <SystemLeftBarUserButton />
  </div>
</template>

<script setup>
const props = defineProps(["size", "topBarSize"]);
</script>
