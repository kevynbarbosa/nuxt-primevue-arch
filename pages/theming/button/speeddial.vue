<template>
  <div class="flex flex-column gap-4">
    <Card>
      <template #title>Speed dial linear</template>
      <template #content>
        <div :style="{ position: 'relative', height: '500px' }">
          <SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
          <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
          <SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
          <SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
        </div>
      </template>
    </Card>

    <Card>
      <template #title>Speed dial circle</template>
      <template #content>
        <div :style="{ height: '500px' }" class="flex align-items-center justify-content-center">
          <SpeedDial :model="items" :radius="80" type="circle" buttonClass="p-button-warning" />
        </div>
      </template>
    </Card>

    <Card>
      <template #title>Speed dial semi-circle</template>
      <template #content>
        <div :style="{ position: 'relative', height: '500px' }">
          <SpeedDial
            :model="items"
            :radius="80"
            type="semi-circle"
            direction="up"
            :style="{ left: 'calc(50% - 2rem)', bottom: 0 }"
          />
          <SpeedDial
            :model="items"
            :radius="80"
            type="semi-circle"
            direction="down"
            :style="{ left: 'calc(50% - 2rem)', top: 0 }"
          />
          <SpeedDial
            :model="items"
            :radius="80"
            type="semi-circle"
            direction="left"
            :style="{ top: 'calc(50% - 2rem)', right: 0 }"
          />
          <SpeedDial
            :model="items"
            :radius="80"
            type="semi-circle"
            direction="right"
            :style="{ top: 'calc(50% - 2rem)', left: 0 }"
          />
        </div>
      </template>
    </Card>

    <Card>
      <template #title>Speed dial quarter-circle</template>
      <template #content>
        <div :style="{ position: 'relative', height: '500px' }">
          <SpeedDial
            :model="items"
            :radius="120"
            type="quarter-circle"
            direction="up-left"
            :style="{ right: 0, bottom: 0 }"
          />
          <SpeedDial
            :model="items"
            :radius="120"
            type="quarter-circle"
            direction="up-right"
            :style="{ left: 0, bottom: 0 }"
          />
          <SpeedDial
            :model="items"
            :radius="120"
            type="quarter-circle"
            direction="down-left"
            :style="{ right: 0, top: 0 }"
          />
          <SpeedDial
            :model="items"
            :radius="120"
            type="quarter-circle"
            direction="down-right"
            :style="{ left: 0, top: 0 }"
          />
        </div>
      </template>
    </Card>

    <Card>
      <template #title>Speed dial Tooltip</template>
      <template #content>
        <div :style="{ position: 'relative', height: '500px' }">
          <SpeedDial
            :model="items"
            direction="up"
            class="right-0 bottom-0"
            buttonClass="p-button-help"
            :tooltipOptions="{ position: 'left' }"
          />
          <SpeedDial
            :model="items"
            direction="up"
            class="left-0 bottom-0"
            buttonClass="p-button-danger"
            :tooltipOptions="{ position: 'right' }"
          />
        </div>
      </template>
    </Card>

    <Card>
      <template #title>Speed dial Tooltip</template>
      <template #content>
        <div :style="{ position: 'relative', height: '500px' }">
          <SpeedDial :model="items" direction="up" mask :style="{ right: '1rem', bottom: '1rem' }" />
        </div>
      </template>
    </Card>

    <Card>
      <template #title>Speed dial Tooltip</template>
      <template #content>
        <div class="flex align-items-end justify-content-center" :style="{ position: 'relative', height: '350px' }">
          <SpeedDial
            :model="items"
            direction="up"
            :transitionDelay="80"
            showIcon="pi pi-bars"
            hideIcon="pi pi-times"
            buttonClass="p-button-outlined"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();

const items = ref([
  {
    label: "Add",
    icon: "pi pi-pencil",
    command: () => {
      toast.add({ severity: "info", summary: "Add", detail: "Data Added", life: 3000 });
    },
  },
  {
    label: "Update",
    icon: "pi pi-refresh",
    command: () => {
      toast.add({ severity: "success", summary: "Update", detail: "Data Updated", life: 3000 });
    },
  },
  {
    label: "Delete",
    icon: "pi pi-trash",
    command: () => {
      toast.add({ severity: "error", summary: "Delete", detail: "Data Deleted", life: 3000 });
    },
  },
  {
    label: "Upload",
    icon: "pi pi-upload",
    command: () => {
      router.push("/fileupload");
    },
  },
  {
    label: "Vue Website",
    icon: "pi pi-external-link",
    command: () => {
      window.location.href = "https://vuejs.org/";
    },
  },
]);
</script>
