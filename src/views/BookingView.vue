<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Titlebar
================================================== -->
    <div id="titlebar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Booking</h2>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li>Booking</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Container -->
    <div class="container">
      <div class="row">
        <!-- Content
		================================================== -->
        <div class="col-lg-8 col-md-8 padding-right-30">
          <h3 class="margin-top-0 margin-bottom-30">Time slot</h3>

          <div class="row">
            <div class="col-md-6">
              <label>Check in</label>
              <input type="date" required v-model="inforTimeSlot.checkIn" />
            </div>

            <div class="col-md-6">
              <label>Check out</label>
              <input type="date" required v-model="inforTimeSlot.checkOut" />
            </div>
          </div>

          <h3 class="margin-top-55 margin-bottom-30">Payment Method</h3>

          <!-- Payment Methods Accordion -->
          <div class="payment">
            <div class="payment-tab payment-tab-active">
              <div class="payment-tab-trigger">
                <input
                  checked
                  id="paypal"
                  name="cardType"
                  type="radio"
                  value="paypal"
                />
                <label for="paypal">PayPal</label>
                <img
                  class="payment-logo paypal"
                  src="https://i.imgur.com/ApBxkXU.png"
                  alt=""
                />
              </div>

              <div class="payment-tab-content">
                <p>You will be redirected to PayPal to complete payment.</p>
              </div>
            </div>

            <div class="payment-tab">
              <div class="payment-tab-trigger">
                <input
                  type="radio"
                  name="cardType"
                  id="creditCart"
                  value="creditCard"
                />
                <label for="creditCart">Credit / Debit Card</label>
                <img
                  class="payment-logo"
                  src="https://i.imgur.com/IHEKLgm.png"
                  alt=""
                />
              </div>

              <div class="payment-tab-content">
                <div class="row">
                  <div class="col-md-6">
                    <div class="card-label">
                      <label for="nameOnCard">Name on Card</label>
                      <input
                        id="nameOnCard"
                        name="nameOnCard"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="card-label">
                      <label for="cardNumber">Card Number</label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234  5678  9876  5432"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="expirynDate">Expiry Month</label>
                      <input
                        id="expiryDate"
                        placeholder="MM"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="expiryDate">Expiry Year</label>
                      <input
                        id="expirynDate"
                        placeholder="YY"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="cvv">CVV</label>
                      <input id="cvv" required type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Payment Methods Accordion / End -->

          <button
            @click="handleConfirmAndPay"
            class="button booking-confirmation-btn margin-top-40 margin-bottom-65"
          >
            Confirm and Pay
          </button>
        </div>

        <!-- Sidebar
		================================================== -->
        <div class="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">
          <!-- Booking Summary -->
          <div class="listing-item-container compact order-summary-widget">
            <div class="listing-item">
              <img :src="roomDetail.image" alt="" />

              <div class="listing-item-content">
                <h3>{{ roomDetail.name }}</h3>
                <span v-if="roomDetail.location"
                  >{{ roomDetail.location.province }},
                  {{ roomDetail.location.country }}</span
                >
              </div>
            </div>
          </div>
          <div class="boxed-widget opening-hours summary margin-top-0">
            <h3><i class="fa fa-calendar-check-o"></i> Booking Summary</h3>
            <ul>
              <li>
                Check in <span>{{ inforTimeSlot.checkIn }}</span>
              </li>
              <li>
                Check out <span>{{ inforTimeSlot.checkOut }}</span>
              </li>
              <li class="total-costs">
                Total Cost
                <span
                  >{{
                    calculateDateDifference(
                      inforTimeSlot.checkIn,
                      inforTimeSlot.checkOut
                    )
                  }}
                  VND</span
                >
              </li>
            </ul>
          </div>
          <!-- Booking Summary / End -->
        </div>
      </div>
    </div>
    <!-- Container / End -->
    <alert-box></alert-box>
  </div>
</template>

<script>
import moment from "moment-timezone";
import { computed, inject, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const price = ref(0);
    const handleAlertBoxGlobal = inject("handleAlertBoxGlobal");

    // Tạo reactive object cho thông tin thời gian đặt phòng
    const inforTimeSlot = reactive({
      checkIn: "",
      checkOut: "",
    });

    // Dispatch action để lấy chi tiết phòng
    store.dispatch("room/getRoomDetailAction", route.params.roomId);

    // Computed property cho chi tiết phòng
    const roomDetail = computed(() => store.state.room.roomDetail);

    // Tính toán sự khác biệt ngày và tính giá tiền
    function calculateDateDifference(date1, date2) {
      if (date1 === "" || date2 === "") return 0;
      const startDate = moment(date1);
      const endDate = moment(date2);
      const difference = endDate.diff(startDate, "days");
      price.value = difference * roomDetail.value.price;
      return price.value;
    }

    // So sánh ngày check-in và check-out
    function compareDates(date1, date2) {
      const checkIn = moment(date1);
      const checkOut = moment(date2);

      if (checkIn.isAfter(checkOut)) {
        handleAlertBoxGlobal("Invalid check out");
        return false;
      }
      return true;
    }

    // Watch sự thay đổi của biến inforTimeSlot
    watch(inforTimeSlot, () => {
      const resultCompare = compareDates(
        inforTimeSlot.checkIn,
        inforTimeSlot.checkOut
      );
      if (!resultCompare) {
        inforTimeSlot.checkOut = "";
      }
    });

    // Xử lý khi người dùng xác nhận và thanh toán
    function handleConfirmAndPay() {
      if (inforTimeSlot.checkIn === "" || inforTimeSlot.checkOut === "") {
        handleAlertBoxGlobal("Please check in and check out date");
      } else {
        // Tạo data cập nhật vào bookings
        const userLogin = store.state.auth.userLogin;
        const data = {
          checkIn: inforTimeSlot.checkIn,
          checkOut: inforTimeSlot.checkOut,
          user: userLogin,
          room: roomDetail.value,
          price: price.value,
          date: moment().format("DD-MM-YYYY"),
          status: "Pending",
        };

        store.dispatch("booking/bookingAction", data);

        router.push("/booking-confirmation");
      }
    }

    return {
      roomDetail,
      inforTimeSlot,
      handleConfirmAndPay,
      calculateDateDifference,
    };
  },
};
</script>

<style></style>
