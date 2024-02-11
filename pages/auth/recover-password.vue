<template>
  <div class="text-center mb-5">
    <div class="text-900 text-3xl font-medium mb-3">Recuperação de senha</div>
  </div>

  <div>
    <label for="email1" class="block text-900 font-medium mb-2">Email</label>
    <InputText id="email1" type="text" class="w-full mb-3" />

    <div class="flex justify-content-center mb-6 text-900">
      <a
        class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
        @click="router.push('/auth/login')"
      >
        Lembrou da senha, clique aqui.
      </a>
    </div>

    <Button label="Enviar e-mail de recuperação" class="w-full"></Button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const router = useRouter();
</script>
