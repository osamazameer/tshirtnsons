<template>
  <div class="home">
    <ContactTable
      :contacts="filteredContacts"
      :company="company"
      @SearchedValue="SearchedValue"
      @on-reset="handleReset"
    />
  </div>
</template>

<script>
import ContactTable from "@/components/Contacts/ContactTable.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  components: {
    ContactTable,
  },

  setup() {
    // eslint-disable-next-line
    let filteredContacts = ref([]);

    const route = useRoute();
    const id = route.params.id;

    let contacts = ref([]);
    let company = ref([]);

    const getCompanyContacts = async () => {
      let res = await axios.get(
        `https://ui-test.tshirtandsons.com/api/companies/${id}/contacts`
      );
      contacts.value = res.data.data.contacts;
      company.value = res.data.data;
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
      company,
    };
  },
};
</script>
