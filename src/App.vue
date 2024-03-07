<template>
  <the-header></the-header>
  <router-view />
  <the-footer v-if="isShowFooter"></the-footer>
  <teleport to="#app" v-if="loading">
    <div class="wrap-loading">
      <div class="loading"></div>
    </div>
  </teleport>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  components: { TheHeader, TheFooter },
  setup() {
    const store = useStore();
    const isShowFooter = computed(() => store.state.showFooter);
    const loading = computed(() => store.state.isLoading); // Thêm computed để theo dõi trạng thái loading
    return {
      isShowFooter,
      loading,
    };
  },
};
</script>

<style>
#app {
  position: relative;
  height: 100vh;
}
#wrapper {
  margin-top: 80px;
}
#titlebar {
  margin-top: 80px;
}
.sticky-wrapper {
  margin-top: 80px;
}
.wrap-loading {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff; /* Màu của đường viền và đường viền nằm bên trái */
  border-radius: 50%; /* Đảm bảo hình tròn */
  width: 50px; /* Đường kính của hình tròn */
  height: 50px; /* Đường kính của hình tròn */
  animation: spin 1s linear infinite; /* Sử dụng animation có tên là 'spin' */
}

@keyframes spin {
  from {
    transform: rotate(0deg); /* Khởi tạo góc quay ban đầu */
  }
  to {
    transform: rotate(360deg); /* Quay một vòng đầy */
  }
}
</style>
