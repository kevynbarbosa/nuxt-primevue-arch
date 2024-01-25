<template>
  <div class="overflow-y-auto">
    <ul class="list-none p-3 m-0">
      <ThemingLeftBarMenuItem v-for="item in links" :key="item.label" :item="item" />
    </ul>
  </div>
</template>

<script setup>
const links = ref([
  {
    label: "Form",
    children: [
      {
        path: "/theming/form/autocomplete",
        label: "Autocomplete",
      },
    ],
  },

  {
    label: "Button",
    children: [
      {
        path: "/theming/button/button",
        label: "Button",
      },
      {
        path: "/theming/button/button",
        label: "Speeddial",
      },
      {
        path: "/theming/button/button",
        label: "SplitButton",
      },
    ],
  },

  {
    icon: "forklift",
    label: "Menus aninhados",
    children: [
      {
        path: "/",
        icon: "leaderboard",
        label: "Submenu",
        children: [
          {
            path: "/",
            icon: "leaderboard",
            label: "Menu 1",
          },
        ],
        permission: "view dashboard",
      },
    ],
  },

  {
    path: "/",
    icon: "",
    label: "Item isolado",
  },
]);
</script>
