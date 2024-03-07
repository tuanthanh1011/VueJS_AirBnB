<!-- File PopUpMixin.vue hoặc PopUpComponent.vue -->
<template>
  <teleport to="#app">
    <transition name="fade">
      <div v-if="infoAlertBox.isVisible" class="popup">
        <div class="title_popup">
          <div class="text_title">Notification</div>
          <button class="close" @click="turnOffAlertBox">
            <svg
              height="18px"
              id="Layer_1"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              width="18px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="#69727D"
                d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"
              />
            </svg>
          </button>
        </div>
        <div class="content_popup">
          <p class="text_content_popup">{{ infoAlertBox.message }}</p>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { computed, inject } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const turnOffAlertBox = inject("turnOffAlertBox");

    const infoAlertBox = computed(() => store.state.infoAlertBox);

    return {
      infoAlertBox,
      turnOffAlertBox,
    };
  },
};
</script>

<style scoped>
.title_popup {
  /* background-color: rgba(62, 189, 97); */
  background-color: #f91942;
  padding: 8px;
  text-align: center;
  color: #fff;
  display: flex;
  position: relative;
  height: 45px;
}
.text_title {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
}
.popup {
  position: fixed;
  right: 50%;
  top: 5%;
  transform: translateX(50%);
  background: #ccc;
  border-radius: 10px;
  overflow: hidden;
  width: 250px;
  z-index: 99999;
  border: 2px solid #ccc;
  /* border: 2px solid #ef9400; */
}

.content_popup {
  text-align: center;
  padding: 16px;
}

.text_content_popup {
  color: #000;
  font-size: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.close {
  background-color: transparent;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4px;
}
.close:hover {
  background-color: #fff;
}
</style>
