import { createRouter, createWebHistory } from "vue-router";
import BlogView from "../views/BlogView.vue";
import RoomsView from "../views/RoomsView.vue";
import HomeView from "../views/HomeView.vue";
import RoomDetailView from "../views/RoomDetailView.vue";
import ContactView from "../views/ContactView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import BookingView from "../views/BookingView.vue";
import BlogDetailView from "../views/BlogDetailView.vue";
import BookingConfirmationView from "../views/BookingConfirmationView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import MyBookingView from "../views/MyBookingView.vue";
import MyProfileView from "../views/MyProfileView.vue";
import store from "../store";

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
  {
    path: "/blog-detail/:blogId",
    name: "blog-detail",
    component: BlogDetailView,
  },
  {
    path: "/booking-confirmation",
    name: "booking-confirmation",
    component: BookingConfirmationView,
  },
  {
    path: "/my-booking",
    name: "my-booking",
    component: MyBookingView,
  },
  {
    path: "/user-profile",
    name: "profile",
    component: MyProfileView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

router.beforeEach((to, from, next) => {
  if (to.name === "rooms") {
    store.commit("setShowFooter", false);
  } else {
    store.commit("setShowFooter", true);
  }
  next();
});

router.beforeEach((to, from, next) => {
  store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  if (
    to.name === "booking" ||
    to.name === "booking-confirmation" ||
    to.name === "profile" ||
    to.name == "my-booking"
  ) {
    if (store.state.auth.userLogin.email != undefined) {
      next();
    } else {
      next({
        name: "sign-in",
      });
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  if (to.name === "sign-in" || to.name === "sign-up") {
    if (store.state.auth.userLogin.email == undefined) {
      next();
    } else {
      next({
        name: "home",
      });
    }
  } else {
    next();
  }
});

export default router;
