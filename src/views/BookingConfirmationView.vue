<template>
  <div class="container" style="margin-top: 80px">
    <div class="row">
      <div class="col-md-12">
        <div class="booking-confirmation-page">
          <i class="fa fa-check-circle"></i>
          <h2 class="margin-top-30">Thanks for your booking!</h2>
          <!-- <p>You'll receive a confirmation email at mail@example.com</p> -->
        </div>
      </div>
    </div>
  </div>
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
