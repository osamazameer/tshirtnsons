<template>
  <div class="home">
    <ContactTable
      :contacts="filteredContacts"
      @SearchedValue="SearchedValue"
      @on-reset="handleReset"
    />
    <!-- <PaginateBar
        @pageSelect="handlePageChange"
        :totalPages="totalPages"
        :currentPage="currentPage"
      /> -->
  </div>
</template>

<script>
import ContactTable from "@/components/Contacts/ContactTable.vue";
// import PaginateBar from "@/components/Common/PaginateBar.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  components: {
    ContactTable,
    // PaginateBar,
  },

  setup() {
    // eslint-disable-next-line
    let filteredContacts = ref([]);

    const route = useRoute();
    const id = route.params.id;

    let contacts = ref([]);
    const getCompanyContacts = async () => {
      let res = await axios.get(
        `https://ui-test.tshirtandsons.com/api/companies/${id}/contacts`
      );
      contacts.value = res.data.data.contacts;
      filteredContacts.value = res.data.data.contacts;
    };
    onMounted(() => {
      getCompanyContacts();
    });

    function SearchedValue(val) {
      console.log("Searched Value", val);
      filteredContacts.value = val.data;
    }

    const handleReset = () => (filteredContacts.value = contacts.value);
    return {
      handleReset,
      SearchedValue,
      filteredContacts,
    };
  },
};
</script>
