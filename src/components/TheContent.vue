<template>
  <div class="container">
    <!-- Blog Posts -->
    <div class="blog-page">
      <div class="row">
        <div class="col-lg-9 col-md-8 padding-right-30">
          <!-- Blog Post -->
          <div class="blog-post" v-for="(blog, index) in blogList" :key="index">
            <!-- Img -->
            <router-link :to="`/blog-detail/${blog.id}`" class="post-img">
              <img style="height: 400px" :src="blog.image" alt="" />
            </router-link>

            <!-- Content -->
            <div class="post-content">
              <h3>
                <a>{{ blog.title }}</a>
              </h3>

              <ul class="post-meta">
                <li>{{ blog.date }}</li>
              </ul>
              <router-link :to="`/blog-detail/${blog.id}`" class="read-more"
                >Read More <i class="fa fa-angle-right"></i
              ></router-link>
            </div>
          </div>
          <!-- Blog Post / End -->
        </div>

        <!-- Blog Posts / End -->

        <!-- Widgets -->
        <div class="col-lg-3 col-md-4">
          <div class="sidebar right">
            <!-- Widget -->
            <div class="widget">
              <h3 class="margin-top-0 margin-bottom-25">Search Blog</h3>
              <div class="search-blog-input">
                <div class="input">
                  <input
                    class="search-field"
                    type="text"
                    placeholder="Type and hit enter"
                    value=""
                  />
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <!-- Widget / End -->

            <!-- Widget -->
            <div class="widget margin-top-40">
              <h3 class="margin-bottom-25">Social</h3>
              <ul class="social-icons rounded">
                <li>
                  <a class="facebook" href="#"><i class="icon-facebook"></i></a>
                </li>
                <li>
                  <a class="twitter" href="#"><i class="icon-twitter"></i></a>
                </li>
                <li>
                  <a class="gplus" href="#"><i class="icon-gplus"></i></a>
                </li>
                <li>
                  <a class="linkedin" href="#"><i class="icon-linkedin"></i></a>
                </li>
              </ul>
            </div>
            <!-- Widget / End-->

            <div class="clearfix"></div>
            <div class="margin-bottom-40"></div>
          </div>
        </div>
      </div>
      <!-- Sidebar / End -->
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const blogList = computed(() => store.state.blog.blogList);

    return {
      blogList,
    };
  },
};
</script>

<style></style>
