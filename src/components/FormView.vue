<template>
  <ModalComponent :active="active" :page="page" />
  <form class="w-full max-w-4xl m-auto pt-4" @submit.prevent="onSubmit">
    <div class="max-w-4xl bg-white py-2 px-5 m-auto w-full mt-10">
      <div class="text-3xl mb-6 text-center">
        {{ page ? page : "Add Contact" }}
      </div>

      <div class="grid grid-cols-2 gap-4 max-w-4xl m-auto">
        <div class="col-span-2 lg:col-span-1">
          <input
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="first-name"
            name="first-name"
            v-model="form.first_name"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div class="col-span-2 lg:col-span-1">
          <input
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="last-name"
            name="last-name"
            v-model="form.last_name"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div class="col-span-2 lg:col-span-1">
          <input
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="phone"
            name="phone"
            v-model="form.phone"
            type="tel"
            placeholder="Enter Phone No."
          />
        </div>

        <div class="col-span-2 lg:col-span-1">
          <input
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="email"
            name="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="col-span-2">
          <textarea
            cols="30"
            rows="2"
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="address"
            name="address"
            v-model="form.address"
            type="text"
            placeholder="Enter your complete address"
          ></textarea>
        </div>

        <div class="col-span-2 lg:col-span-1">
          <input
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="post_code"
            name="post_code"
            v-model="form.post_code"
            type="text"
            placeholder="Enter your post code"
          />
        </div>

        <div class="col-span-2 lg:col-span-1">
          <input
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="country_code"
            name="country_code"
            v-model="form.country_code"
            type="text"
            placeholder="Country Code"
          />
        </div>

        <div class="col-span-2 lg:col-span-1">
          <input
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="town_city"
            name="town_city"
            v-model="form.town_city"
            type="text"
            placeholder="Town City"
          />
        </div>

        <div class="col-span-2 lg:col-span-1">
          <input
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
            id="region_county"
            name="region_county"
            v-model="form.region_county"
            type="text"
            placeholder="Region County"
          />
        </div>

        <div class="col-span-2 text-right">
          <router-link to="/contacts">
            <button
              class="py-3 mr-2 px-6 bg-black text-white font-bold w-full sm:w-32"
            >
              Back
            </button>
          </router-link>
          <br class="md:hidden my-4" />
          <button
            type="submit"
            class="py-3 px-6 bg-black text-white font-bold w-full sm:w-32"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { watch, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import ModalComponent from "@/components/Common/ModalComponent.vue";
import axios from "axios";

export default {
  components: {
    ModalComponent,
  },

  props: {
    contact: Object,
    check: String,
    page: String,
  },

  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const id = route.params.id;
    const active = ref(false);

    let form = ref({
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
    watch(props, (value) => {
      console.log("value changeed on props", value.contact.data);
      form.value = value.contact.data;
    });
    function Check() {
      router.push({ name: "contacts" });
    }

    const onSubmit = async () => {
      console.log("Form Values", form);
      if (props.page == "Edit Contact") {
        await axios.put(
          `https://ui-test.tshirtandsons.com/api/contacts/${id}`,
          form.value
        );
      } else {
        await axios.post(
          "https://ui-test.tshirtandsons.com/api/contacts/",
          form.value
        );
      }
      active.value = true;
    };

    return {
      form,
      props,
      active,
      onSubmit,
      Check,
    };
  },
};
</script>
