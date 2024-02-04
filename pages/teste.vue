<template>
  <div class="flex justify-content-center p-4">
    <div>
      <Button label="Submit teste" />
    </div>
  </div>

  <div class="flex justify-content-center p-4">
    <div>
      <Calendar
        v-model="date"
        label="Submit teste"
        show-button-bar
        :pt="{
          buttonbar: {
            style: { background: 'linear-gradient(to right, #d03355 -5.11%, #fb7a6b 97.89%)' },
          },
        }"
      />
    </div>
  </div>

  <div class="flex justify-content-center p-4 gap-3">
    <div class="w-8rem h-8rem bg-primary">lightness +20%</div>
    <div class="w-8rem h-8rem bg-primary">lightness -20%</div>
    <div class="w-8rem h-8rem bg-custom-700">Color</div>
    <div class="w-8rem h-8rem bg-primary">saturation +20%</div>
    <div class="w-8rem h-8rem bg-primary">saturation -20%</div>
  </div>

  <div class="flex justify-content-center p-4 gap-3">
    <div class="w-8rem h-8rem bg-red-50">Color 50 (fdf7f6)</div>
    <div class="w-8rem h-8rem bg-red-100">Color 100 (f7d6d2)</div>
    <div class="w-8rem h-8rem bg-red-200">Color 200 (f1b6af)</div>
    <div class="w-8rem h-8rem bg-red-300">Color 300 (eb968c)</div>
    <div class="w-8rem h-8rem bg-red-400">Color 400 (e57668)</div>
    <div class="w-8rem h-8rem bg-red-500">Color 500 (df5645)</div>
    <div class="w-8rem h-8rem bg-red-600">Color 600 (be493b)</div>
    <div class="w-8rem h-8rem bg-red-700">Color 700 (9c3c30)</div>
    <div class="w-8rem h-8rem bg-red-800">Color 800 (7b2f26)</div>
    <div class="w-8rem h-8rem bg-red-900">Color 900 (59221c)</div>
  </div>

  <div class="flex justify-content-center p-4 gap-3">
    <Button label="Danger" severity="danger" />
  </div>
</template>

<script setup></script>

<style scoped>
:deep(.p-button) {
  border-radius: 50px;
  border-style: hidden;
  background-image: linear-gradient(135.89deg, #d03355, #fb7a6b, #fb7a6b, #d03355);
  background-size: 200%;
  background-position: left;
  transition: all 0.3s ease-in;
}

:deep(.p-button:hover) {
  background-position: right;
}

:deep(.p-button:focus) {
  box-shadow: none;
}

/* :deep(.p-datepicker-buttonbar) { */
:deep(.p-datepicker) {
  /* background: linear-gradient(135.89deg, #d03355 -5.11%, #fb7a6b 97.89%); */
  background-color: #d03355;
}
</style>
