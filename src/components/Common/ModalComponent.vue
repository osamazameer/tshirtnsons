<template>
  <div
    :class="active ? 'block' : 'hidden'"
    class="absolute inset-0 z-40 h-screen opacity-50 bg-black"
  ></div>
  <div
    :class="active ? 'block' : 'hidden'"
    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
  >
    <div class="relative mx-auto w-auto max-w-4xl">
      <div
        class="bg-white w-full max-w-4xl rounded shadow-2xl flex flex-col p-6 justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16 mb-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div v-if="page == 'Add Contact'">
          <h1 class="w-100 text-xl">Added Contact Successfully!</h1>
        </div>
        <div v-if="page == 'Edit Contact'">
          <h1 class="w-100 text-xl">Updated Contact Successfully!</h1>
        </div>
        <div v-if="page == 'Add Company Contact'">
          <h1 class="w-100 text-xl">Added Contact Successfully!</h1>
        </div>

        <router-link
          class="rounded bg-black text-white px-4 py-2 w-3/12 m-auto mb-2 mt-4"
          to="/contacts"
        >
          Okay
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    page: String,
    active: Boolean,
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
