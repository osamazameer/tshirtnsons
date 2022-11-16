<template>
  <div v-if="contacts != null" class="container mx-auto">
    <div>
      <div class="overflow-x-auto relative md:mx-0 md:mb-0 mb-2 mt-6 mx-4">
        <h1 class="float-left text-2xl mt-2">Contacts</h1>

        <router-link to="/add-contact">
          <button
            class="bg-gray-500 mb-2 hover:bg-gray-500 float-right text-white py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded"
          >
            Add Contact
          </button>
        </router-link>

        <form @submit.prevent="onSubmit">
          <div class="">
            <input
              class="border-solid border-black outline-none md:border-b-0 border-2 p-2 pl-4 md:text-xl w-full"
              id="search"
              name="search"
              v-model="search"
              type="text"
              placeholder="Search Contact"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 absolute right-4 cursor-pointer top-16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="overflow-x-auto relative">
        <table
          class="w-full text-sm text-left text-black border-r-2 border-l-2 border-black dark:text-gray-400"
        >
          <thead
            class="text-xs text-black uppercase bg-Charcoal border-t-2 border-gray-600"
          >
            <tr>
              <th scope="col" class="py-3 px-6">ID</th>
              <th scope="col" class="py-3 px-6">First Name</th>
              <th scope="col" class="py-3 px-6">Last Name</th>
              <th scope="col" class="py-3 px-6">Phone</th>
              <th scope="col" class="py-3 px-6">Country</th>
              <th scope="col" class="py-3 px-6">Town</th>
              <th scope="col" class="py-3 px-6">Region</th>
              <th scope="col" class="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="contact in contacts"
              :key="contact.id"
              class="bg-white text-black border-b-2 border-t-2 border-gray-600"
            >
              <td class="py-4 px-6">{{ contact.id }}</td>
              <td class="py-4 px-6">{{ contact.first_name }}</td>
              <td class="py-4 px-6">{{ contact.last_name }}</td>
              <td class="py-4 px-6">{{ contact.phone }}</td>
              <td class="py-4 px-6">{{ contact.country_code }}</td>
              <td class="py-4 px-6">{{ contact.town_city }}</td>
              <td class="py-4 px-6">{{ contact.region_county }}</td>
              <td class="py-4 px-6">
                <router-link :to="`/edit-contact/${contact.id}`">
                  <button
                    class="bg-transparent hover:bg-gray-500 text-white-100 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                  >
                    View Contact
                  </button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="mt-8 justify-center items-center">
      <h1 class="mt-8 text-center text-4xl">
        We are currently working on this section!<br />
        Sorry for the inconvinence.
      </h1>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";

export default {
  props: {
    // companies: Array,
    contacts: Array,
  },
  emits: ["SearchedValue"],

  setup(props, { emit }) {
    const search = ref("");
    const onSubmit = async () => {
      let getContact = await axios.get(
        `https://ui-test.tshirtandsons.com/api/contacts?name=${search.value}`
      );

      console.log("Response ==>", getContact.data);
      emit("SearchedValue", getContact.data);
    };
    watch(search, (value) => {
      if (!value || value === "") emit("on-reset");
    });

    return {
      search,
      props,
      onSubmit,
    };
  },
};
</script>
