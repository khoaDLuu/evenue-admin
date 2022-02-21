<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
  <authenticator variation="modal" :hide-sign-up="true">
    <template #header>
      <!-- <div style="padding: var(--amplify-space-large); text-align: center">
      </div> -->
    </template>

    <template #sign-in-header>
      <div class="mx-auto">
        <img
          class="mx-auto h-12 mt-6 mb-4"
          alt="Evenue logo"
          src="./images/logo.png"
        />
        <h3 class="text-3xl text-gray-700 text-center">
          Admin dashboard - Login
        </h3>
      </div>
    </template>

    <template v-slot:sign-in-footer>
      <div class="text-center">
      </div>
    </template>

    <template #footer>
      <div style="padding: var(--amplify-space-large); text-align: center">
        <p class="amplify-text" style="color: var(--amplify-colors-neutral-80)">
          &copy; Evenue
        </p>
      </div>
    </template>

    <!-- <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template> -->
    <router-view />
  </authenticator>
</template>
