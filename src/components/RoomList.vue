<template>
  <section class="listings-container margin-top-30">
    <!-- Sorting / Layout Switcher -->
    <div class="row fs-switcher">
      <div class="col-md-6">
        <!-- Showing Results -->
        <p class="showing-results">{{ numOfResult }} Results Found</p>
      </div>
    </div>

    <!-- Listings -->
    <div class="row fs-listings">
      <!-- Listing Item -->
      <room-list-items
        v-for="(room, index) in roomList"
        :key="index"
        :room="room"
      ></room-list-items>
      <!-- Listing Item / End -->
    </div>
    <!-- Listings Container / End -->
  </section>
</template>

<script>
import { useStore } from "vuex";
import RoomListItems from "./RoomListItems.vue";
import { computed, toRef, watch } from "vue";
export default {
  components: { RoomListItems },
  setup() {
    const store = useStore();
    let numOfResult = toRef(0);
    const roomList = computed(() => store.state.room.roomList);

    watch(roomList, () => {
      numOfResult.value = roomList.value.length;
    });

    return {
      roomList,
      numOfResult,
    };
  },
};
</script>

<style></style>
