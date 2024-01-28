SystemLeftBarMenuDropdown
<template>
  <div class="flex flex-column h-screen sticky top-0 bg-white" :style="{ width: size + 'px' }">
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

      <SystemLeftBarMenuSection name="Theming">
        <SystemLeftBarMenuDropdown name="Form"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Button">
          <SystemLeftBarMenuItem name="Button" />
          <SystemLeftBarMenuItem name="Speed Dial" />
          <SystemLeftBarMenuItem name="SplitButton" />
        </SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Data"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Panel"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Overlay"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="File"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Menu"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Chart"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Messages"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Media"></SystemLeftBarMenuDropdown>
        <SystemLeftBarMenuDropdown name="Misc"></SystemLeftBarMenuDropdown>

        <SystemLeftBarMenuItem name="Item" />
      </SystemLeftBarMenuSection>
    </div>

    <SystemLeftBarUserButton />
  </div>
</template>

<script setup>
const props = defineProps(["size", "topBarSize"]);
</script>
