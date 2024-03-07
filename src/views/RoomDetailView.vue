<template>
  <div class="container">
    <div class="row sticky-wrapper">
      <div class="col-lg-8 col-md-8 padding-right-30">
        <!-- Titlebar -->
        <div id="titlebar" class="listing-titlebar">
          <div class="listing-titlebar-title">
            <h2>
              {{ roomDetail.name }}<span class="listing-tag">Apartments</span>
            </h2>
            <span>
              <a
                href="#listing-location"
                class="listing-address"
                v-if="roomDetail.location"
              >
                <i class="fa fa-map-marker" v-if="roomDetail.location"></i>
                {{ roomDetail.location.name }}
              </a>
            </span>
          </div>
        </div>

        <!-- Listing Nav -->
        <div id="listing-nav" class="listing-nav-container">
          <ul class="listing-nav">
            <li><a href="#listing-overview" class="active">Overview</a></li>
            <li><a href="#listing-gallery">Gallery</a></li>
            <li><a href="#listing-reviews">Reviews</a></li>
            <li><a href="#add-review">Add Review</a></li>
          </ul>
        </div>

        <!-- Overview -->
        <div id="listing-overview" class="listing-section">
          <!-- Apartment Description -->
          <ul class="apartment-details">
            <li>{{ roomDetail.guest }} guest</li>
            <li>{{ roomDetail.bath }} bathroom</li>
            <li>{{ roomDetail.bedRoom }} bedroom</li>
          </ul>

          <!-- Description -->
          <p>
            {{ roomDetail.description }}
          </p>

          <!-- Listing Contacts -->
          <div class="listing-links-container">
            <ul class="listing-links contact-links">
              <li>
                <a href="tel:12-345-678" class="listing-links"
                  ><i class="fa fa-phone"></i> (123) 123-456</a
                >
              </li>
              <li>
                <a href="mailto:mail@example.com" class="listing-links"
                  ><i class="fa fa-envelope-o"></i> example@gmail.com</a
                >
              </li>
            </ul>
            <div class="clearfix"></div>

            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </div>

        <!-- Slider -->
        <div id="listing-gallery" class="listing-section">
          <h3 class="listing-desc-headline margin-top-70">Gallery</h3>
          <div class="wrap-gallery" style="display: flex">
            <div>
              <img
                style="padding: 0 8px; flex: 1"
                src="https://decoxdesign.com/upload/images/hotel-callista-3551m2-phong-ngu-07-decox-design.jpg"
                class="item mfp-gallery"
              />
            </div>
            <div>
              <img
                style="padding: 0 8px; flex: 1"
                src="https://decoxdesign.com/upload/images/hotel-caitilin-1952m2-phong-ngu-04-decox-design.jpg"
                class="item mfp-gallery"
              />
            </div>
          </div>
        </div>

        <!-- Reviews -->
        <review-list-item :idRoom="$route.params.roomId"></review-list-item>
        <!-- End reviews -->

        <!-- Add Review Box -->
        <div id="add-review" class="add-review-box">
          <!-- Add Review -->
          <h3 class="listing-desc-headline margin-bottom-10">Add Review</h3>
          <p class="comment-notes">Your email address will not be published.</p>

          <!-- Review Comment -->
          <form
            id="add-comment"
            class="add-comment"
            @submit.prevent="handleSubmitReview"
          >
            <fieldset>
              <div>
                <label>Review:</label>
                <textarea
                  required
                  cols="40"
                  rows="3"
                  v-model="content"
                ></textarea>
              </div>
            </fieldset>
            <button
              v-if="userLogin.email != undefined"
              type="submit"
              class="button"
            >
              Submit Review
            </button>
            <router-link
              to="/sign-in"
              v-else
              class="button book-now fullwidth margin-top-5"
              >Login For Submit Review</router-link
            >
            <div class="clearfix"></div>
          </form>
        </div>
        <!-- Add Review Box / End -->
      </div>

      <!-- Sidebar
		================================================== -->
      <div class="col-lg-4 col-md-4 margin-top-75 sticky">
        <!-- Verified Badge -->
        <div
          class="verified-badge with-tip"
          data-tip-content="Listing has been verified and belongs the business owner or manager."
        >
          <i class="sl sl-icon-check"></i> Verified Listing
        </div>

        <!-- Book Now -->
        <div
          id="booking-widget-anchor"
          class="boxed-widget booking-widget margin-top-35"
        >
          <h3><i class="fa fa-calendar-check-o"></i> Booking</h3>
          <div class="row with-forms margin-top-0">
            <div class="col-lg-12">
              <input
                type="text"
                id="date-picker"
                placeholder="Date"
                readonly="readonly"
              />
            </div>
          </div>

          <!-- Book Now -->
          <a
            v-if="userLogin.email != undefined"
            @click="handleBooking"
            class="button book-now fullwidth margin-top-5"
            >Booking</a
          >

          <router-link
            to="/sign-in"
            v-else
            class="button book-now fullwidth margin-top-5"
            >Login For Booking</router-link
          >

          <!-- Estimated Cost -->
          <!-- 				<div class="booking-estimated-cost">
					<strong>Total Cost</strong>
					<span>$49</span>
				</div> -->
        </div>
        <!-- Book Now / End -->

        <!-- Contact -->
        <div class="boxed-widget margin-top-35">
          <ul class="listing-details-sidebar">
            <li><i class="sl sl-icon-phone"></i> (123) 123-456</li>
            <!-- <li><i class="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> -->
            <li>
              <i class="fa fa-envelope-o"></i> <a href="#">example@gmail.com</a>
            </li>
          </ul>

          <ul class="listing-details-sidebar social-profiles">
            <li>
              <a href="#" class="facebook-profile"
                ><i class="fa fa-facebook-square"></i> Facebook</a
              >
            </li>
            <li>
              <a href="#" class="twitter-profile"
                ><i class="fa fa-twitter"></i> Twitter</a
              >
            </li>
            <!-- <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> -->
          </ul>

          <!-- Reply to review popup -->
          <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
              <h3>Send Message</h3>
            </div>
            <div class="message-reply margin-top-0">
              <textarea
                cols="40"
                rows="3"
                placeholder="Your message to Tom"
              ></textarea>
              <button class="button">Send Message</button>
            </div>
          </div>
        </div>
        <!-- Contact / End-->
      </div>
      <!-- Sidebar / End -->
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import ReviewListItem from "@/components/ReviewListItem.vue";
import moment from "moment-timezone";

export default {
  components: { ReviewListItem },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const content = ref("");

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");

    store.dispatch("room/getRoomDetailAction", route.params.roomId);

    const roomDetail = computed(() => store.state.room.roomDetail);

    const userLogin = computed(() => store.state.auth.userLogin);

    function handleBooking() {
      router.push({
        name: "booking",
        params: {
          roomId: roomDetail.value.id,
        },
      });
    }

    function handleSubmitReview() {
      const data = {
        content: content.value,
        date: moment().format("DD-MM-YYYY"),
        user: {
          id: userLogin.value.id,
          name: userLogin.value.name,
        },
        roomId: roomDetail.value.id,
      };
      store.dispatch("review/createReviewAction", data);
      content.value = "";
    }

    return {
      roomDetail,
      handleBooking,
      userLogin,
      handleSubmitReview,
      content,
    };
  },
};
</script>

<style>
.wrap-gallery {
  width: 100%;
}
</style>
