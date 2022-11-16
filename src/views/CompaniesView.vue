<template>
  <div class="home">
    <CompanyTable :companies="companies" />
  </div>
</template>

<script>
import CompanyTable from "@/components/CompanyTable.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  components: {
    CompanyTable,
  },

  setup() {
    // eslint-disable-next-line
    let companies = ref([]);
    const getCompanies = async () => {
      let res = await axios.get(
        "https://ui-test.tshirtandsons.com/api/companies"
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
