<template>
  <div
    class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
    style="height: 60px"
  >
    <div class="flex">
      <a
        class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
        data-pd-ripple="true"
        data-pd-styleclass="true"
      >
        <i class="pi pi-bars text-4xl"></i>
        <span
          role="presentation"
          aria-hidden="true"
          data-p-ink="true"
          data-p-ink-active="false"
          class="p-ink"
          data-pc-name="ripple"
          data-pc-section="root"
        ></span>
      </a>
      <span class="p-input-icon-left">
        <i class="pi pi-search"></i>
        <input
          class="p-inputtext p-component border-none w-10rem sm:w-20rem"
          data-pc-name="inputtext"
          data-pc-section="root"
          type="text"
          placeholder="Search"
        />
      </span>
    </div>
    <a class="cursor-pointer block lg:hidden text-700 p-ripple" data-pd-ripple="true" data-pd-styleclass="true">
      <i class="pi pi-ellipsis-v text-2xl"></i>
      <span
        role="presentation"
        aria-hidden="true"
        data-p-ink="true"
        data-p-ink-active="false"
        class="p-ink"
        data-pc-name="ripple"
        data-pc-section="root"
      ></span>
    </a>
    <ul
      class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
    >
      <li>
        <a
          class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
          data-pd-ripple="true"
        >
          <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
          <span class="block lg:hidden font-medium">Inbox</span>
          <span
            role="presentation"
            aria-hidden="true"
            data-p-ink="true"
            data-p-ink-active="false"
            class="p-ink"
            data-pc-name="ripple"
            data-pc-section="root"
          ></span>
        </a>
      </li>
      <li>
        <a
          class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
          data-pd-ripple="true"
        >
          <i
            class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"
            data-pd-badge="true"
            data-p-overlay-badge="true"
          >
            <span
              id="pv_id_14_badge"
              class="p-badge p-component p-badge-danger p-badge-dot"
              data-pc-name="badge"
              data-pc-section="root"
            ></span>
          </i>
          <span class="block lg:hidden font-medium">Notifications</span>
          <span
            role="presentation"
            aria-hidden="true"
            data-p-ink="true"
            data-p-ink-active="false"
            class="p-ink"
            data-pc-name="ripple"
            data-pc-section="root"
          ></span>
        </a>
      </li>
      <li class="border-top-1 surface-border lg:border-top-none">
        <a
          class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
          data-pd-ripple="true"
        >
          <img
            src="/images/blocks/avatars/circle/avatar-f-1.png"
            class="mr-3 lg:mr-0"
            style="width: 32px; height: 32px"
          />
          <div class="block lg:hidden">
            <div class="text-900 font-medium">Josephine Lillard</div>
            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
          </div>
          <span
            role="presentation"
            aria-hidden="true"
            data-p-ink="true"
            data-p-ink-active="false"
            class="p-ink"
            data-pc-name="ripple"
            data-pc-section="root"
          ></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps([]);

const someVar = ref(null);

onMounted(() => {
  // Mounted
});
</script>
