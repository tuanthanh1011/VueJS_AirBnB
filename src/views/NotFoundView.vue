<template>
  <!-- Container -->
  <div class="container" style="margin-top: 80px">
    <div class="row">
      <div class="col-md-12">
        <section id="not-found" class="center">
          <h2>404 <i class="fa fa-question-circle"></i></h2>
          <p>We're sorry, but the page you were looking for doesn't exist.</p>
        </section>
      </div>
    </div>
  </div>
  <!-- Container / End -->
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  },
};
</script>

<style></style>
