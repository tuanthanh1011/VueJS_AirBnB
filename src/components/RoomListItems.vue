<template>
  <div class="col-lg-12 col-md-12">
    <div class="listing-item-container list-layout" data-marker-id="6">
      <a @click="getRoomDetail" class="listing-item">
        <!-- Image -->
        <div class="listing-item-image">
          <img :src="room.image" alt="" />
          <span class="tag">Events</span>
        </div>

        <!-- Content -->
        <div class="listing-item-content">
          <div class="listing-item-inner">
            <h3>{{ room.name }}</h3>
            <span>{{ room.location.name }}</span>
            <div class="star-rating" data-rating="5.0">
              <div class="rating-counter">({{ room.bedRoom }} bedRoom)</div>
            </div>
          </div>
          <span class="like-icon"> </span>
          <div class="listing-item-details">price: {{ room.price }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    room: {
      type: Object,
    },
  },

  setup(props) {
    const router = useRouter();

    const { room } = toRefs(props);

    function getRoomDetail() {
      router.push({
        name: "room-detail",
        params: { roomId: room.value.id },
      });
    }

    return {
      getRoomDetail,
    };
  },
};
</script>

<style></style>
