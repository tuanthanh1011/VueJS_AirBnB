<template>
  <div class="main-search-input">
    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input
          id="autocomplete-input"
          type="text"
          placeholder="Location"
          v-model="keyword"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <ul v-if="locationList.length > 0 && keyword != ''" class="list-location">
        <li
          v-for="(location, index) in locationList"
          :key="index"
          @click="handleClickLocation(location)"
        >
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-title">{{ location.name }}</span>
        </li>
      </ul>
    </div>
    <button class="button">Search</button>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const keyword = ref("");
    const store = useStore();
    const router = useRouter();

    store.dispatch("location/getAllLocationAction");

    const handleClickLocation = (location) => {
      router.push(`/rooms/${location.id}`);
    };

    watch(keyword, (newValue) => {
      store.dispatch("location/updateKeywordSearchAction", newValue);
    });

    const locationList = computed(() => {
      return store.getters["location/getLocationBySearch"];
    });

    return {
      keyword,
      locationList,
      handleClickLocation,
    };
  },
};
</script>

<style lang="scss">
.main-search-input-item .location {
  position: relative;
}

.list-location {
  position: absolute;
  list-style: none;
  top: 150%;
  background: #fff;
  color: #222;
  width: 100%;
  border-radius: 20px;
  padding: 6px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  li {
    padding: 10px;
    font-size: 20px;
    &:hover {
      cursor: pointer;
      background: #f7f7f7;
      border-radius: 20px;
    }
    .location-item-title {
      margin-left: 12px;
    }
  }
}
</style>
