<template>
  <div id="listing-reviews" class="listing-section">
    <h3 class="listing-desc-headline margin-top-75 margin-bottom-20">
      Reviews <span>({{ reviewListByRoom.length }})</span>
    </h3>

    <div class="clearfix"></div>

    <section class="comments listing-reviews">
      <ul>
        <review-item
          v-for="(review, index) in reviewListByRoom"
          :key="index"
          :review="review"
        ></review-item>
      </ul>
    </section>
  </div>
</template>

<script>
import { computed, toRefs } from "vue";
import { useStore } from "vuex";
import ReviewItem from "./ReviewItem.vue";
export default {
  components: { ReviewItem },
  props: {
    idRoom: {
      type: String,
    },
  },
  setup(props) {
    const { idRoom } = toRefs(props);
    const store = useStore();

    store.dispatch("review/getAllReviewAction").then(() => {
      store.dispatch("review/getReviewByRoomAction", idRoom.value);
    });

    const reviewListByRoom = computed(
      () => store.state.review.reviewListByRoom
    );

    return {
      reviewListByRoom,
    };
  },
};
</script>

<style></style>
