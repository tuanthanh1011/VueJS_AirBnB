<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg"
    tabindex="-1"
    style="background-image: url(images/bg-login.jpg)"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div
          id="sign-in-dialog"
          class="zoom-anim-dialog"
          style="margin-top: 100px"
        >
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
                        required
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                        v-model="userRegister.name"
                        @blur="validateName"
                      />
                    </label>
                    <span style="color: red">{{ validateForm.nameError }}</span>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="email2"
                      >Email Address:
                      <i class="im im-icon-Mail"></i>
                      <input
                        required
                        type="text"
                        class="input-text"
                        name="email"
                        id="email2"
                        value=""
                        v-model="userRegister.email"
                        @blur="validateEmail"
                      />
                    </label>
                    <span style="color: red">{{
                      validateForm.emailError
                    }}</span>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="phone"
                      >Phone:
                      <i class="fa-solid fa-phone"></i>
                      <input
                        required
                        type="text"
                        class="input-text"
                        name="phone"
                        id="phone"
                        value=""
                        v-model="userRegister.phone"
                        @blur="validatePhoneNumber"
                      />
                    </label>
                    <span style="color: red">{{
                      validateForm.phoneError
                    }}</span>
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
                        required
                        class="input-text"
                        type="password"
                        name="password1"
                        id="password1"
                        v-model="userRegister.password"
                        @blur="validatePassword"
                      />
                    </label>
                    <span style="color: red">{{
                      validateForm.passwordError
                    }}</span>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password2"
                      >Repeat Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        required
                        class="input-text"
                        type="password"
                        name="password2"
                        id="password2"
                        v-model="userRegister.rePassword"
                        @blur="validateRePassword"
                      />
                    </label>
                    <span style="color: red">{{
                      validateForm.rePasswordError
                    }}</span>
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
import { inject, reactive, ref } from "vue";
import { createArrayNumber } from "../utils/createArrayNumber";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { validateAllCaseFromField } from "@/utils/validateForm";
import AlertBox from "@/components/AlertBox.vue";
export default {
  components: { AlertBox },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isInvalidForm = ref(false);
    const handleAlertBoxGlobal = inject("handleAlertBoxGlobal");
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

    const validateForm = reactive({
      emailError: "",
      phoneError: "",
      nameError: "",
      passwordError: "",
      rePasswordError: "",
    });

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");

    function validatePhoneNumber() {
      validateForm.phoneError = validateAllCaseFromField(
        "phone",
        userRegister.phone
      );
    }

    function validateName() {
      validateForm.nameError = validateAllCaseFromField(
        "name",
        userRegister.name
      );
    }

    function validateEmail() {
      validateForm.emailError = validateAllCaseFromField(
        "email",
        userRegister.email
      );
    }

    function validatePassword() {
      validateForm.passwordError = validateAllCaseFromField(
        "password",
        userRegister.password
      );
    }

    function validateRePassword() {
      validateForm.rePasswordError = validateAllCaseFromField(
        "rePassword",
        userRegister.rePassword
      );
    }

    function checkFieldsValidate() {
      isInvalidForm.value = false;
      for (let message in validateForm) {
        if (validateForm[message] != "") {
          isInvalidForm.value = true;
          break;
        }
      }
    }

    function handleBackHome() {
      {
        router.push("/");
      }
    }

    function handleSubmitForm() {
      checkFieldsValidate();
      if (isInvalidForm.value) {
        handleAlertBoxGlobal("Invalid data!");
      } else {
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
          handleAlertBoxGlobal("Password incorrect!");
        }
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
      handleBackHome,
      validateForm,
      validateEmail,
      validatePhoneNumber,
      validateName,
      validatePassword,
      validateRePassword,
      isInvalidForm,
    };
  },
};
</script>

<style></style>
