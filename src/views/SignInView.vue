<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg"
    tabindex="-1"
    style="background-image: url(images/bg-login.jpg)"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Sign In</h3>
          </div>
          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Login -->
              <div class="tab-content" id="tab1" style="">
                <form @submit.prevent="handleSubmitLogin" class="login">
                  <p class="form-row form-row-wide">
                    <label for="username"
                      >Email:
                      <i class="im im-icon-Mail"></i>
                      <input
                        required
                        type="text"
                        class="input-text"
                        name="username"
                        id="username"
                        value=""
                        v-model="userLogin.email"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        required
                        class="input-text"
                        type="password"
                        name="password"
                        id="password"
                        v-model="userLogin.password"
                      />
                    </label>
                    <span class="lost_password">
                      <router-link to="/sign-up">Sign up</router-link>
                    </span>
                    <br />
                  </p>

                  <div class="form-row">
                    <input
                      type="submit"
                      class="button border margin-top-5"
                      name="login"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button
            title="Close (Esc)"
            type="button"
            class="mfp-close"
            @click="handleBackHome"
          ></button>
        </div>
      </div>
    </div>
    <alert-box></alert-box>
  </div>
</template>

<script>
import { inject, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AlertBox from "@/components/AlertBox.vue";
export default {
  components: { AlertBox },
  setup() {
    const store = useStore();
    const router = useRouter();
    const handleAlertBoxGlobal = inject("handleAlertBoxGlobal");

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");

    const userLogin = reactive({
      email: "",
      password: "",
    });

    function handleBackHome() {
      {
        router.push("/");
      }
    }

    async function handleSubmitLogin() {
      const result = await store.dispatch("auth/signInAction", {
        data: userLogin,
        router,
      });
      console.log(result);
      if (!result) {
        handleAlertBoxGlobal("Accounts or passwords are incorrect!!");
      }
    }

    return {
      userLogin,
      handleSubmitLogin,
      handleBackHome,
    };
  },
};
</script>

<style lang="scss">
.my-bg {
  top: 0px;
  position: absolute;
  height: 100vh;
  overflow-y: scroll;
}
</style>
