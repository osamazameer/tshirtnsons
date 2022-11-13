<template>
  <NavbarComponent />
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "@/components/Common/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent,
  },

  setup() {},
};
</script>
