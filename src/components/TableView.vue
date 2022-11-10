<template>
  <div class="container mx-auto">
    <div>
      <div class="mt-4 overflow-x-auto relative">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="py-3 px-6">ID</th>
              <th scope="col" class="py-3 px-6">Title</th>
              <th scope="col" class="py-3 px-6">Desc</th>
              <th scope="col" class="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="company in companies"
              :key="company.id"
              class="bg-white border-b dark:bg-gray-700 dark:border-gray-900"
            >
              <td class="py-4 px-6">{{ company.id }}</td>
              <td class="py-4 px-6">{{ company.title }}</td>
              <td class="py-4 px-6">{{ company.description }}</td>
              <td class="py-4 px-6">EDIT</td>
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
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
