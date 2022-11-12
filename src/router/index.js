import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompaniesView from "../views/CompaniesView.vue";
import ContactsView from "../views/ContactsView.vue";
import AddContact from "../views/AddContact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/companies",
    name: "companies",
    component: CompaniesView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/add-contact",
    name: "addcontact",
    component: AddContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
