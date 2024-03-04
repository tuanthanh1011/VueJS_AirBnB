import { createRouter, createWebHistory } from "vue-router";
import BlogView from "../views/BlogView.vue";
import RoomsView from "../views/RoomsView.vue";
import HomeView from "../views/HomeView.vue";
import RoomDetailView from "../views/RoomDetailView.vue";
import ContactView from "../views/ContactView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import BookingView from "../views/BookingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/rooms/:locationId",
    name: "rooms",
    component: RoomsView,
  },
  {
    path: "/room-detail/:roomId",
    name: "room-detail",
    component: RoomDetailView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignInView,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUpView,
  },
  {
    path: "/booking/:roomId",
    name: "booking",
    component: BookingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router;
