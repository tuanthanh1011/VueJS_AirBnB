<template>
  <div>
    <the-title-bar></the-title-bar>
    <div class="container">
      <!-- Post Content -->
      <div class="col-lg-12 col-md-8">
        <!-- Blog Post -->
        <div class="blog-post single-post">
          <!-- Img -->
          <img class="post-img" :src="blogDetail.image" alt="" />

          <!-- Content -->
          <div class="post-content">
            <h3>{{ blogDetail.title }}</h3>

            <ul class="post-meta">
              <li>{{ blogDetail.date }}</li>
              <!-- <li><a href="#">Tips</a></li>
          <li><a href="#">5 Comments</a></li> -->
            </ul>

            <p>
              {{ blogDetail.content }}
            </p>

            <!-- <div class="post-quote">
          <span class="icon"></span>
          <blockquote>
            Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed
            ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed
            neque sed sapien rutrum.
          </blockquote>
        </div> -->

            <!-- Share Buttons -->
            <ul class="share-buttons margin-top-40 margin-bottom-0">
              <li>
                <a class="fb-share" href="#"
                  ><i class="fa fa-facebook"></i> Share</a
                >
              </li>
              <li>
                <a class="twitter-share" href="#"
                  ><i class="fa fa-twitter"></i> Tweet</a
                >
              </li>
              <li>
                <a class="gplus-share" href="#"
                  ><i class="fa fa-google-plus"></i> Share</a
                >
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <!-- Blog Post / End -->

        <!-- About Author -->
        <div class="about-author">
          <img
            style="width: 80px; height: 80px"
            src="../../public/images/user-avatar.jpg"
            alt=""
          />
          <div class="about-description" v-if="blogDetail && blogDetail.author">
            <h4>{{ blogDetail.author.name }}</h4>
            <a href="#">{{ blogDetail.author.email }}</a>
          </div>
        </div>

        <div class="margin-top-50"></div>
      </div>
      <!-- Content / End -->
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import TheTitleBar from "@/components/TheTitleBar.vue";
export default {
  components: { TheTitleBar },
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    store.dispatch("blog/getBlogByIdAction", route.params.blogId);

    const blogDetail = computed(() => store.state.blog.blogDetail);

    console.log(blogDetail);

    return {
      blogDetail,
    };
  },
};
</script>

<style></style>
