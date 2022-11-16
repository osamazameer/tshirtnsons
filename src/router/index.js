import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompaniesView from "../views/companies/CompaniesView.vue";
import ContactsView from "../views/contacts/ContactsView.vue";
import AddContact from "../views/contacts/AddContact.vue";
import EditContact from "../views/contacts/EditContact.vue";
import CompanyContacts from "../views/companies/CompanyContacts.vue";

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
  {
    path: "/edit-contact/:id",
    name: "editcontact",
    component: EditContact,
  },
  {
    path: "/company-contacts/:id",
    name: "companycontacts",
    component: CompanyContacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
