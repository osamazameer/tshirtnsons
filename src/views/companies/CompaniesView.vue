<template>
  <div class="home">
    <LoadingComponent v-if="loading" />
    <template v-else>
      <CompanyTable :companies="companies" />
    </template>
  </div>
</template>

<script>
import LoadingComponent from "@/components/Common/LoadingComponent.vue";
import CompanyTable from "@/components/Companies/CompanyTable.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  components: {
    CompanyTable,
    LoadingComponent,
  },

  setup() {
    // eslint-disable-next-line
    let companies = ref([]);
    let loading = ref(true);

    const getCompanies = async () => {
      try {
        loading.value = true;
        let res = await axios.get(
          "https://ui-test.tshirtandsons.com/api/companies"
        );
        companies.value = res.data.data;
        console.log("CHECK COMPANIES ==> ", res.data.data);
      } catch (e) {
        console.log("Error Occured", e);
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      getCompanies();
    });
    return {
      companies,
      loading,
    };
  },
};
</script>
