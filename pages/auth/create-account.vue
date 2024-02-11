<template>
  <div class="text-center mb-5">
    <div class="text-900 text-3xl font-medium mb-3">Vamos criar sua conta</div>
  </div>

  <div>
    <label for="email1" class="block text-900 font-medium mb-2">Email</label>
    <InputText id="email1" type="text" class="w-full mb-3" />

    <label for="password" class="block text-900 font-medium mb-2">Senha</label>
    <InputText id="password" type="text" class="w-full mb-3" />

    <label for="password_confirmation" class="block text-900 font-medium mb-2">Confirme a senha</label>
    <InputText id="password_confirmation" type="text" class="w-full mb-3" />

    <Button label="Redefinir a senha" class="w-full"></Button>

    <div class="flex justify-content-center mt-6 text-900">
      <a
        class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
        @click="router.push('/auth/login')"
      >
        Login
      </a>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const router = useRouter();
</script>
