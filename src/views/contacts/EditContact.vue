<template>
  <FormView :contact="contact" page="Edit Contact" />
</template>

<script>
import FormView from "@/components/FormView.vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  components: {
    FormView,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    let contact = ref({});

    const getContact = async () => {
      let res = await axios.get(
        `https://ui-test.tshirtandsons.com/api/contacts/${id}`
      );
      contact.value = res.data;
      console.log("value changed");
      // console.log("Contact", contact);
      // console.log("Contact", res.data);
    };

    onMounted(() => {
      getContact();
    });

    return {
      getContact,
      contact,
    };
  },
};
</script>
