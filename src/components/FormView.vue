<template>
  <form class="w-full max-w-lg m-auto pt-4" @submit.prevent="onSubmit">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="first-name"
        >
          First Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="first-name"
          name="first-name"
          v-model="form.first_name"
          type="text"
          placeholder="First Name"
        />
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="last-name"
        >
          Last Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="last-name"
          name="last-name"
          v-model="form.last_name"
          type="text"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="phone"
        >
          Phone
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="phone"
          name="phone"
          v-model="form.phone"
          type="tel"
          placeholder="Enter Phone No."
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          name="email"
          v-model="form.email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="address"
        >
          Address
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="address"
          name="address"
          v-model="form.address"
          type="text"
          placeholder="Enter your complete address"
        />
        <p class="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="post_code"
        >
          Post Code
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="post_code"
          name="post_code"
          v-model="form.post_code"
          type="text"
          placeholder="Enter your post code"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="country_code"
        >
          Country
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="country_code"
          name="country_code"
          v-model="form.country_code"
          type="text"
          placeholder="Country Code"
        />
      </div>

      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="town_city"
        >
          Town
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="town_city"
          name="town_city"
          v-model="form.town_city"
          type="text"
          placeholder="Town City"
        />
      </div>

      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="region_county"
        >
          Region
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="region_county"
          name="region_county"
          v-model="form.region_county"
          type="text"
          placeholder="Region County"
        />
      </div>
    </div>
    <div class="w-full m-auto">
      <button
        type="submit"
        class="mt-4 mb-4 bg-transparent hover:bg-blue-500 text-white-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  props: {
    companies: Array,
  },

  setup(props) {
    const router = useRouter();

    const form = reactive({
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      postcode: "",
      town_city: "",
      country_code: "",
      region_county: "",
      phone: "",
    });

    const onSubmit = async () => {
      await axios.post("https://ui-test.tshirtandsons.com/api/contacts", form);
      await router.push({ name: "contacts" });
    };

    return {
      form,
      props,
      onSubmit,
    };
  },
};
</script>
