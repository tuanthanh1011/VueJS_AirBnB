<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Banner
================================================== -->
    <the-banner></the-banner>

    <!-- Content
================================================== -->
    <!-- Fullwidth Section -->
    <the-places></the-places>
    <!-- Fullwidth Section / End -->

    <!-- Recent Blog Posts -->
    <the-blog></the-blog>
    <!-- Recent Blog Posts / End -->

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import ThePlaces from "@/components/ThePlaces.vue";
import TheBlog from "@/components/TheBlog.vue";
import { useStore } from "vuex";
export default {
  name: "HomeView",
  components: {
    TheBanner,
    ThePlaces,
    TheBlog,
  },
  setup() {
    const store = useStore();

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  },
};
</script>
