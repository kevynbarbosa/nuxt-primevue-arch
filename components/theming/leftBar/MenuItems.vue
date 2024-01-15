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
    icon: "forklift",
    label: "Portal de Fornecedores",
    children: [
      {
        path: "/",
        icon: "leaderboard",
        label: "Dashboard",
        children: [
          {
            path: "/",
            icon: "leaderboard",
            label: "Dashboard",
            permission: "view dashboard",
          },
        ],
        permission: "view dashboard",
      },
      {
        path: "/",
        icon: "leaderboard",
        label: "Dashboard",
        permission: "view dashboard",
      },
      {
        path: "/solicitation/new",
        icon: "add_circle",
        label: "Nova solicitação",
        permission: "can solicitate",
      },
      {
        path: { name: "solicitation-In-box" },
        icon: "inbox",
        label: "Caixa de Entrada",
        permission: "view inbox",
      },
      {
        path: { name: "solicitation-all" },
        icon: "list",
        label: "Todas solicitações",
        permission: "view all solicitations",
      },
      {
        path: { name: "solicitation-mine" },
        icon: "folder",
        label: "Minhas Solicitações",
        permission: "view my solicitations",
      },
      {
        path: { name: "solicitation-employees" },
        icon: "badge",
        label: "Funcionários",
        permission: "view employees",
      },
      {
        path: { name: "active-base" },
        icon: "verified",
        label: "Base Ativa",
        permission: "view active base",
      },
      {
        path: { name: "black-list" },
        icon: "do_not_disturb",
        label: "Black List",
        permission: "view blacklist",
      },
      {
        path: { name: "verde-campo-list" },
        icon: "factory",
        label: "Verde Campo",
        permission: "manage verde campo",
      },
    ],
  },
  {
    icon: "mdi-file-document-outline",
    label: "Central de Recebimento",
    children: [
      {
        path: "/invoices",
        icon: "mdi-note-multiple",
        label: "Painel de Notas",
        permission: "view invoice painel",
      },
      {
        path: "/invoices/all-solicitations",
        icon: "list",
        label: "Todas as Solicitações",
        permission: "view all invoice solicitations",
      },
      {
        path: "/invoices/inbox",
        icon: "inbox",
        label: "Caixa de Entrada",
        permission: "view invoice inbox",
      },
    ],
  },

  {
    icon: "people",
    label: "Usuários",
    children: [
      {
        path: "/roles",
        icon: "key",
        label: "Perfis de acesso",
        permission: "manage roles",
      },
      {
        path: "/user",
        icon: "person",
        label: "Usuários",
        permission: "manage users",
      },
      {
        path: { name: "department-list" },
        icon: "business",
        label: "Departamentos",
        permission: "manage departments",
      },
      {
        path: { name: "position-list" },
        icon: "assignment_ind",
        label: "Alçadas",
        permission: "manage positions",
      },
    ],
  },
  {
    label: "Suporte",
    icon: "mdi-help-circle-outline",
    // access: "COLLA",
    children: [
      {
        label: "Suporte On-line",
        path: "https://central.semplice.com.br/reuniao/Le%C3%A3o",
        icon: "mdi-face-agent",
        target: "_blank",
      },
    ],
  },
]);
</script>
