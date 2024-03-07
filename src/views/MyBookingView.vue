<template>
  ================================================== -->
  <div class="container">
    <!-- Titlebar -->
    <div id="titlebar" style="background-color: white; padding: 0">
      <div class="row">
        <div class="col-md-12">
          <h2>My bookings</h2>
          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>Bookings</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Listings -->
      <div class="col-lg-12 col-md-12">
        <div class="dashboard-list-box margin-top-0">
          <!-- Reply to review popup -->
          <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
              <h3>Send Message</h3>
            </div>
            <div class="message-reply margin-top-0">
              <textarea
                cols="40"
                rows="3"
                placeholder="Your Message to Kathy"
              ></textarea>
              <button class="button">Send</button>
            </div>
          </div>

          <h4>Booking Requests</h4>
          <ul>
            <li
              class="approved-booking"
              v-for="(booking, index) in myBookingList"
              :key="index"
            >
              <div class="list-box-listing bookings">
                <div class="list-box-listing-img">
                  <img
                    src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120"
                    alt=""
                  />
                </div>
                <div class="list-box-listing-content">
                  <div class="inner">
                    <h3>
                      {{ booking.room.name }}
                      <span class="booking-status pending">{{
                        booking.status
                      }}</span>
                    </h3>

                    <div class="inner-booking-list">
                      <h5>Booking Date:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">
                          {{ booking.date }}
                        </li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Check In:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">
                          {{ booking.checkIn }}
                        </li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Check Out:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">
                          {{ booking.checkOut }}
                        </li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Price:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">{{ booking.price }} VND</li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Client:</h5>
                      <ul class="booking-list">
                        <li>{{ booking.user.name }}</li>
                        <li>{{ booking.user.phone }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="buttons-to-right">
                <button
                  @click="handleDeleteBooking(booking.id)"
                  class="button gray reject"
                >
                  <i class="sl sl-icon-close"></i> Delete
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const idUser = store.state.auth.userLogin.id;

    const getAllBookingPromise = store.dispatch("booking/getAllBookingAction");

    getAllBookingPromise.then(() => {
      store.dispatch("booking/getBookingByUserAction", idUser);
    });

    const handleDeleteBooking = (bookingId) => {
      console.log(idUser);
      store.dispatch("booking/deleteBookingAction", { bookingId, idUser });
    };

    const myBookingList = computed(() => store.state.booking.bookingListByUser);

    return {
      myBookingList,
      handleDeleteBooking,
    };
  },
};
</script>

<style>
h5 {
  padding-right: 4px;
}
</style>
