<template>
  <section
    class="fullwidth margin-top-0 padding-bottom-75"
    data-background-color="#fff"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="headline centered margin-bottom-55">
            <strong class="headline-with-separator">From The Blog</strong>
          </h3>
        </div>
      </div>

      <div class="row">
        <!-- Blog Post Item -->
        <div
          class="col-md-4"
          v-for="(blog, index) in listBlogShow"
          :key="index"
        >
          <router-link
            :to="`/blog-detail/${blog.id}`"
            class="blog-compact-item-container"
          >
            <div class="blog-compact-item">
              <img :src="blog.image" alt="" />
              <div class="blog-compact-item-content">
                <ul class="blog-post-tags">
                  <li>{{ blog.date }}</li>
                </ul>
                <h3>{{ blog.title }}</h3>
                <div class="content">
                  {{ blog.content }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- Blog post Item / End -->

        <div class="col-md-12 centered-content">
          <router-link to="blog" class="button border margin-top-10"
            >View Blog</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const listBlogShow = ref([]);

    store.dispatch("blog/getAllBlogAction");

    const listBlog = computed(() => store.state.blog.blogList);

    watch(listBlog, (newValue) => {
      for (let i = 0; i < 3; i++) {
        if (newValue[i]) {
          const { id, title, date, content, image } = newValue[i];
          listBlogShow.value[i] = {
            id,
            title,
            date,
            content,
            image,
          };
        }
      }
    });

    return {
      listBlogShow,
    };
  },
};
</script>

<style>
.content {
  max-height: 3em;
  overflow: hidden; /* Ẩn nội dung vượt quá chiều cao tối đa */
  text-overflow: ellipsis; /* Hiển thị dấu "..." khi nội dung bị ẩn */
  white-space: nowrap; /* Ngăn chặn các dòng mới */
  color: white;
}
</style>
