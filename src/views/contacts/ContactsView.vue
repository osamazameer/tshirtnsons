<template>
  <div class="home">
    <LoadingComponent v-if="loading" />
    <template v-else>
      <ContactTable
        :contacts="filteredContacts"
        @SearchedValue="SearchedValue"
        @on-reset="handleReset"
        page="add-contact"
      />
      <PaginateBar
        @pageSelect="handlePageChange"
        :totalPages="totalPages"
        :currentPage="currentPage"
      />
    </template>
  </div>
</template>

<script>
import ContactTable from "@/components/Contacts/ContactTable.vue";
import PaginateBar from "@/components/Common/PaginateBar.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import LoadingComponent from "@/components/Common/LoadingComponent.vue";

export default {
  components: {
    ContactTable,
    PaginateBar,
    LoadingComponent,
  },

  setup() {
    // eslint-disable-next-line
    let contacts = ref([]);
    let filteredContacts = ref([]);
    let totalPages = ref("");
    let currentPage = ref("");
    let loading = ref(true);

    const getContacts = async () => {
      try {
        loading.value = true;
        let res = await axios.get(
          `https://ui-test.tshirtandsons.com/api/contacts/collection?page=${currentPage.value}`
        );
        contacts.value = res.data.data;

        filteredContacts.value = res.data.data;
        //Getting Total Pages
        totalPages.value = res.data.meta.last_page;
      } catch (e) {
        console.log(e);
        // show approripate Error to user
      } finally {
        loading.value = false;
      }
    };

    function handlePageChange(id) {
      console.log("id selected", id);
      currentPage.value = id;
      getContacts();
    }

    function SearchedValue(val) {
      console.log("Searched Value", val);
      filteredContacts.value = val.data;
    }

    const handleReset = () => (filteredContacts.value = contacts.value);

    onMounted(() => {
      getContacts();
    });
    return {
      contacts,
      loading,
      totalPages,
      currentPage,
      filteredContacts,
      handlePageChange,
      SearchedValue,
      handleReset,
    };
  },
};
</script>
