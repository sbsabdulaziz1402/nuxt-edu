<script setup lang="ts">
import { ref } from "vue";
import { useAuthService } from "@/entities/user/services/authService";
import { useUserStore } from "@/entities/user/model/store";
import { navigateTo } from "nuxt/app";
definePageMeta({
    layout: false
})

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const { login } = useAuthService();
const userStore = useUserStore();

const handleLogIn = async () => {
  try {
    await login(email.value, password.value);
    navigateTo('/catalog')
    console.log("User logged in:", userStore.getUser());
    errorMessage.value = ""; // Clear error if login is successful
  } catch (error: any) {
    errorMessage.value = error.message; // Handle Firebase errors
    console.error("Log-in error:", error);
  }
};
</script>

<template>
  <div class="login-wrapper">
    <div class="max-w-sm mx-auto mt-8 p-4 border rounded shadow">
      <h2 class="text-lg font-bold mb-4">Log In</h2>
      <form>
        <div class="mb-4">
          <label for="email" class="block mb-1 font-medium">Email</label>
          <input
          v-model="email"
          id="email"
          type="email"
          placeholder="Enter your email"
          class="w-full p-2 border rounded"
          required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-1 font-medium">Password</label>
          <input
          v-model="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          class="w-full p-2 border rounded"
          required
          />
        </div>
        <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Log In
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Add any additional styling here */
</style>
