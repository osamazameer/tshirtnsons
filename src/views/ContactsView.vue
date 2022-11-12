<template>
  <div class="home">
    <TableView :contacts="contacts" />
  </div>
</template>

<script>
import TableView from "@/components/TableView.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  components: {
    TableView,
  },

  setup() {
    // eslint-disable-next-line
    let contacts = ref([]);
    const getContacts = async () => {
      let res = await axios.get(
        "https://ui-test.tshirtandsons.com/api/contacts"
      );
      contacts.value = res.data.data;
    };
    onMounted(() => {
      getContacts();
    });
    return {
      contacts,
    };
  },
};
</script>
