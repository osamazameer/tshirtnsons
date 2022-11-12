<template>
  <div class="home">
    <TableView :companies="companies" />
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
    let companies = ref([]);
    const getCompanies = async () => {
      let res = await axios.get(
        "https://ui-test.tshirtandsons.com/api/contacts"
      );
      companies.value = res.data.data;
      console.log("CHECK COMPANIES ==> ", res.data.data);
    };
    onMounted(() => {
      getCompanies();
    });
    return {
      companies,
    };
  },
};
</script>
