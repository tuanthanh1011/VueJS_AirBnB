<template>
  <!-- Header Container
================================================== -->
  <header id="header-container">
    <!-- Header -->
    <div id="header">
      <div class="container">
        <!-- Left Side Content -->
        <div class="left-side">
          <!-- Logo -->
          <div id="logo">
            <a href="/"
              ><img
                src="/images/logo2.png"
                data-sticky-logo="images/logo.png"
                alt=""
              />
            </a>
          </div>

          <!-- Mobile Navigation -->
          <div class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </nav>
          <div class="clearfix"></div>
          <!-- Main Navigation / End -->
        </div>
        <!-- Left Side Content / End -->

        <!-- Right Side Content / End -->
        <div class="right-side">
          <div class="header-widget" style="display: flex">
            <div v-if="userLogin.email == null">
              <router-link to="/sign-in" class="sign-in"
                ><i class="sl sl-icon-login"></i> Sign In</router-link
              >
              <router-link to="/sign-up" class="sign-in"
                ><i class="sl sl-icon-user"></i> Sign Up</router-link
              >
            </div>
            <!-- User Menu -->
            <div
              v-else
              class="user-menu"
              :class="{ active: isActive }"
              @click="handleOpenSubNav"
            >
              <div class="user-name">
                <span><img src="/images/dashboard-avatar.jpg" alt="" /></span
                >Hi,
                {{ userLogin.name }}
              </div>
              <ul>
                <li>
                  <router-link to="/user-profile"
                    ><i class="sl sl-icon-user"></i> My Profile
                  </router-link>
                </li>
                <li>
                  <router-link to="/my-booking"
                    ><i class="sl sl-icon-phone"></i> My Booking
                  </router-link>
                </li>
                <li>
                  <router-link to="/" @click="handleLogout"
                    ><i class="sl sl-icon-power"></i> Logout</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Right Side Content / End -->
      </div>
    </div>
    <!-- Header / End -->
  </header>
  <div class="clearfix"></div>
  <!-- Header Container / End -->
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const isActive = ref(false);
    const userLogin = computed(() => store.state.auth.userLogin);

    const handleOpenSubNav = () => {
      isActive.value = !isActive.value;
    };

    function handleLogout() {
      store.dispatch("auth/logoutAction");
    }

    return {
      userLogin,
      handleLogout,
      isActive,
      handleOpenSubNav,
    };
  },
};
</script>
<style>
#header-container {
  position: fixed;
  width: 100%;
  z-index: 9999;
  background: white;
}
</style>
