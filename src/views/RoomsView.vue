<template>
  <div class="fs-container">
    <div class="content fs-inner-container" style="overflow: inherit">
      <div class="fs-content">
        <!-- Search -->
        <section class="search">
          <div class="row">
            <div class="col-md-12">
              <!-- Row With Forms -->
              <div class="row with-forms">
                <!-- Main Search Input -->
                <div class="col-fs-6">
                  <div class="input-with-icon">
                    <i class="sl sl-icon-magnifier"></i>
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                      value=""
                    />
                  </div>
                </div>

                <!-- Main Search Input -->
                <div class="col-fs-6">
                  <div class="input-with-icon location">
                    <div id="autocomplete-container">
                      <input
                        id="autocomplete-input"
                        type="text"
                        placeholder="Location"
                      />
                    </div>
                    <a href="#"><i class="fa fa-map-marker"></i></a>
                  </div>
                </div>
              </div>
              <!-- Row With Forms / End -->
            </div>
          </div>
        </section>
        <!-- Search / End -->

        <room-list></room-list>
      </div>
    </div>
    <div class="fs-inner-container map-fixed">
      <!-- Map -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14894.06295330849!2d105.74685394999999!3d21.052054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2sHanoi%20University%20of%20Industry!5e0!3m2!1sfr!2s!4v1708522128002!5m2!1sfr!2s"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
import RoomList from "@/components/RoomList.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  components: { RoomList },
  setup() {
    const route = useRoute();
    const store = useStore();

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");

    store.commit("setShowFooter", false);

    store.dispatch("room/getRoomListByLocationAction", route.params.locationId);
  },
};
</script>

<style></style>
