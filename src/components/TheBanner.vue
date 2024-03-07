<template>
  <!-- Banner
================================================== -->
  <div class="main-search-container centered">
    <div class="main-search-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 style="color: white; font-weight: 800">
              Find Nearby
              <!-- Typed words can be configured in script settings at the bottom of this HTML file -->
              <span class="typed-words"></span>
            </h2>
            <h4 style="color: white; font-weight: 500">
              Expolore top-rated attractions, activities and more
            </h4>
            <the-main-search></the-main-search>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMainSearch from "./TheMainSearch.vue";
export default {
  components: { TheMainSearch },
};
</script>
<style>
.main-search-container {
  background-image: url(https://news.airbnb.com/wp-content/uploads/sites/4/2019/10/Luxembourg-A-Airbnb-20-for-2020.jpg?w=2048);
}
</style>
