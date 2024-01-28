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
