<template>
  <div class="flex min-h-screen justify-content-center align-items-center">
    <div class="w-12rem h-8rem bg-orange-200 border-round-lg">
      <div>Job interview</div>
      <div>All day</div>
      <div>
        <div>avatar 1</div>
        <div>avatar 2</div>
      </div>
      <div>actions button</div>
    </div>
  </div>
</template>

<style scoped>
.div {
  background-color: #fff;
}
.div-2 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-2 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 17%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-3 {
  color: #000;
  white-space: nowrap;
  background-color: #cfd1e2;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 239px 60px 621px;
  font: 400 12px Inter, sans-serif;
}
@media (max-width: 991px) {
  .div-3 {
    white-space: initial;
    padding: 40px 20px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 83%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-4 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
  }
}
.div-5 {
  color: #000;
  white-space: nowrap;
  background-color: #c8f3d9;
  justify-content: center;
  align-items: start;
  padding: 20px 60px 20px 217px;
  font: 400 12px Inter, sans-serif;
}
@media (max-width: 991px) {
  .div-5 {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px 0 30px;
  }
}
.div-6 {
  background-color: #f2ebeb;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 80px 13px 17px;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}
.div-7 {
  border-radius: 50%;
  align-self: stretch;
  display: flex;
  width: 28px;
  height: 28px;
  flex-direction: column;
}
.div-8 {
  color: #000;
  margin: auto 0;
  font: 400 12px Inter, sans-serif;
}
.div-9 {
  border-radius: 50%;
  align-self: stretch;
  display: flex;
  width: 28px;
  height: 28px;
  flex-direction: column;
}
</style>

<script setup>
definePageMeta({
  layout: false,
});
</script>
