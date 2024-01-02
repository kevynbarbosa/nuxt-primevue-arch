<template>
  <div class="p-4 flex flex-column flex-auto">
    <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
      <Card v-for="i in 20" style="width: 25em">
        <template #header></template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([]);

const someVar = ref(null);
</script>
