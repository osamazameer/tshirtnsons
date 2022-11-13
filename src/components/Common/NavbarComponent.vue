<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Tshirt & Sons</span>
    </div>
    <div class="block lg:hidden">
      <button
        @click="open = !open"
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2"
    >
      <div class="text-sm lg:flex-grow">
        <router-link to="/companies">
          <a
            href="/"
            class="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Companies
          </a>
        </router-link>
        <router-link to="/contacts">
          <a
            href="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Contacts
          </a>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    let open = ref(false);

    return {
      open,
    };
  },
};
</script>
