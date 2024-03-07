<template>
  <div>
    <!-- Titlebar
================================================== -->
    <the-title-bar></the-title-bar>

    <!-- Content -->
    <the-content></the-content>

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
</template>

<script>
import TheTitleBar from "@/components/TheTitleBar.vue";
import TheContent from "@/components/TheContent.vue";
import { useStore } from "vuex";
export default {
  components: { TheTitleBar, TheContent },
  setup() {
    const store = useStore();

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");

    store.dispatch("blog/getAllBlogAction");
  },
};
</script>

<style></style>
