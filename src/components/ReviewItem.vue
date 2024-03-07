<template>
  <li>
    <div class="avatar">
      <img
        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
        alt=""
      />
    </div>
    <div class="comment-content">
      <div class="arrow-comment"></div>
      <div class="comment-by">
        {{ review.user.name }}
        <i
          class="tip"
          data-tip-content="Person who left this review actually was a customer"
        ></i>
        <span class="date">{{ review.date }}</span>
      </div>
      <p>
        {{ review.content }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
    },
  },
  setup() {},
};
</script>

<style></style>
