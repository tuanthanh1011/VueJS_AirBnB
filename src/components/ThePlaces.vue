<template>
  <section
    class="fullwidth margin-top-65 padding-top-35 padding-bottom-70"
    data-background-color="#f8f8f8"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="headline centered margin-bottom-45">
            <strong class="headline-with-separator"
              >The Proposed Locations</strong
            >
          </h3>
        </div>

        <div class="col-md-12">
          <div class="simple-slick-carousel dots-nav" style="display: flex">
            <!-- Listing Item -->
            <div
              class="carousel-item"
              v-for="(location, index) in listLocationShow"
              :key="index"
              style="margin: 0 8px; flex: 1"
            >
              <a href="" class="listing-item-container">
                <div class="listing-item">
                  <img :src="location.image" alt="" />

                  <div class="listing-badge now-open">Now Open</div>

                  <div class="listing-item-content">
                    <h3>{{ location.name }}<i class="verified-icon"></i></h3>
                    <span>{{ location.province }}, {{ location.country }}</span>
                  </div>
                  <span class="like-icon"></span>
                </div>
                <!-- <div class="star-rating" data-rating="3.5">
                  <div class="rating-counter">(12 reviews)</div>
                </div> -->
              </a>
            </div>
            <!-- Listing Item / End -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const listLocationShow = ref([]);

    store.dispatch("location/getAllLocationAction");

    const listLocation = computed(() => store.state.location.locationList);

    watch(listLocation, (newValue) => {
      for (let i = 0; i < 3; i++) {
        if (newValue[i]) {
          const { name, country, province, image } = newValue[i];
          listLocationShow.value[i] = {
            name,
            country,
            province,
            image,
          };
        }
      }
    });

    return {
      listLocation,
      listLocationShow,
    };
  },
};
</script>

<style></style>
