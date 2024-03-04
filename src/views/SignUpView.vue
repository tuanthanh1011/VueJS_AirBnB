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
            <h3>Sign Up</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Register -->
              <div class="tab-content" id="tab2">
                <form class="register" @submit.prevent="handleSubmitForm">
                  <p class="form-row form-row-wide">
                    <label for="username2"
                      >Username:
                      <i class="im im-icon-Male"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                        value=""
                        v-model="userRegister.name"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="email2"
                      >Email Address:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email2"
                        value=""
                        v-model="userRegister.email"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="email2"
                      >Phone:
                      <i class="fa-solid fa-phone"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="phone"
                        id="phone"
                        value=""
                        v-model="userRegister.phone"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="birthday"
                      >Birthday:
                      <div style="display: flex">
                        <select v-model="userRegister.year">
                          <option value="">year</option>
                          <option
                            v-for="(year, index) in arrayYear"
                            :key="index"
                          >
                            {{ year }}
                          </option>
                        </select>
                        <select v-model="userRegister.month">
                          <option value="">month</option>
                          <option
                            v-for="(month, index) in arrayMonth"
                            :key="index"
                          >
                            {{ month }}
                          </option>
                        </select>
                        <select v-model="userRegister.day">
                          <option value="">day</option>
                          <option v-for="(day, index) in arrayDay" :key="index">
                            {{ day }}
                          </option>
                        </select>
                      </div>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="gender"
                      >Gender:
                      <select v-model="userRegister.gender">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="addres">
                      Address:
                      <i class="im im-icon-Location-2"></i>
                      <input
                        class="input-text"
                        type="text"
                        name="address"
                        id="address"
                        v-model="userRegister.address"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password1"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password1"
                        id="password1"
                        v-model="userRegister.password"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password2"
                      >Repeat Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password2"
                        id="password2"
                        v-model="userRegister.rePassword"
                      />
                    </label>
                  </p>
                  <p>
                    <span class="lost_password">
                      <router-link to="/sign-in">Sign in</router-link>
                    </span>
                  </p>
                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="register"
                    value="Register"
                  />
                </form>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" class="mfp-close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { createArrayNumber } from "../utils/createArrayNumber";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const userRegister = reactive({
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      year: "",
      month: "",
      day: "",
      gender: "",
      address: "",
    });

    function handleSubmitForm() {
      if (userRegister.password === userRegister.rePassword) {
        const data = reactive({
          name: userRegister.name,
          email: userRegister.email,
          password: userRegister.password,
          phone: userRegister.phone,
          birthday: `${userRegister.year}/${userRegister.month}/${userRegister.day}`,
          gender: userRegister.gender === "Male",
          address: userRegister.address,
        });
        store.dispatch("auth/signUpAction", { data, router });
      } else {
        alert("Mật khẩu không khớp");
      }
    }

    const arrayMonth = createArrayNumber(1, 12);
    const arrayYear = createArrayNumber(1970, 2024);
    const arrayDay = createArrayNumber(1, 31);
    return {
      arrayMonth,
      arrayYear,
      arrayDay,
      userRegister,
      handleSubmitForm,
    };
  },
};
</script>

<style></style>
