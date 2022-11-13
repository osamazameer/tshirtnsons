<template>
  <div class="container mx-auto">
    <div>
      <div class="mt-4 overflow-x-auto relative">
        <div class="">
          <h1 class="float-left text-xl mt-2">Contacts</h1>
          <router-link to="/add-contact">
            <button
              class="bg-blue-500 mb-2 hover:bg-blue-400 float-right text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Add Contact
            </button>
          </router-link>
        </div>
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="py-3 px-6">ID</th>
              <th scope="col" class="py-3 px-6">First Name</th>
              <th scope="col" class="py-3 px-6">Last Name</th>
              <th scope="col" class="py-3 px-6">Phone</th>
              <th scope="col" class="py-3 px-6">Country</th>
              <th scope="col" class="py-3 px-6">Town</th>
              <th scope="col" class="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="contact in contacts"
              :key="contact.id"
              class="bg-white border-b dark:bg-gray-700 dark:border-gray-900"
            >
              <td class="py-4 px-6">{{ contact.id }}</td>
              <td class="py-4 px-6">{{ contact.first_name }}</td>
              <td class="py-4 px-6">{{ contact.last_name }}</td>
              <td class="py-4 px-6">{{ contact.phone }}</td>
              <td class="py-4 px-6">{{ contact.country_code }}</td>
              <td class="py-4 px-6">{{ contact.town_city }}</td>
              <td class="py-4 px-6">
                <router-link to="/add-contact">
                  <button
                    class="bg-transparent hover:bg-blue-500 text-white-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
</template>

<script>
export default {
  props: {
    companies: Array,
    contacts: Array,
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
