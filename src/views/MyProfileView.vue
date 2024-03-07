<template>
  <!-- Content
	================================================== -->
  <div class="container">
    <!-- Titlebar -->
    <div id="titlebar" style="background-color: white">
      <div class="row">
        <div class="col-md-12">
          <h2>My Profile</h2>
          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>My Profile</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Profile -->
      <div class="col-lg-6 col-md-12">
        <div class="dashboard-list-box margin-top-0">
          <h4 class="gray">Profile Details</h4>
          <div class="dashboard-list-box-static">
            <!-- <div class="edit-profile-photo">
              <img src="images/user-avatar.jpg" alt="" />
              <div class="change-photo-btn">
                <div class="photoUpload">
                  <span><i class="fa fa-upload"></i> Upload Photo</span>
                  <input type="file" class="upload" />
                </div>
              </div>
            </div> -->

            <!-- Details -->
            <form action="" @submit.prevent="handleSaveChanges">
              <div class="my-profile">
                <label class="label-profile">Your Name</label>
                <input readonly :value="userLogin.name" type="text" />

                <label class="label-profile">Phone</label>
                <input
                  v-model="userData.phone"
                  type="text"
                  pattern="[0-9]*"
                  required
                />

                <label class="label-profile">Email</label>
                <input
                  v-model="userData.email"
                  type="email"
                  required
                  pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                />

                <label class="label-profile">Address</label>
                <input v-model="userData.address" type="text" required />

                <label class="label-profile">Birthday</label>
                <input :value="userLogin.birthday" type="text" readonly />

                <label class="label-profile">Gender</label>
                <input
                  :value="userLogin.gender == true ? 'Nam' : 'Nữ'"
                  type="text"
                  readonly
                />
              </div>

              <button type="submit" class="button margin-top-15">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Change Password -->
      <div class="col-lg-6 col-md-12">
        <div class="dashboard-list-box margin-top-0">
          <h4 class="gray">Change Password</h4>
          <div class="dashboard-list-box-static">
            <!-- Change Password -->
            <div class="my-profile">
              <form action="" @submit.prevent="handleChangePassword">
                <label class="margin-top-0">Current Password</label>
                <input
                  required
                  v-model="passChange.passwordOld"
                  type="password"
                />

                <label>New Password</label>
                <input
                  required
                  v-model="passChange.rePasswordOld"
                  type="password"
                />

                <label>Confirm New Password</label>
                <input
                  required
                  v-model="passChange.newPassword"
                  type="password"
                />

                <button type="submit" class="button margin-top-15">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <alert-box></alert-box>
  </div>
  <!-- Content / End -->
</template>

<script>
import { computed, inject, reactive } from "vue";
import { useStore } from "vuex";
import AlertBox from "@/components/AlertBox.vue";
export default {
  components: { AlertBox },
  setup() {
    const store = useStore();
    const handleAlertBoxGlobal = inject("handleAlertBoxGlobal");

    const userLogin = computed(() => store.state.auth.userLogin);

    const userData = reactive({
      address: userLogin.value.address,
      birthday: userLogin.value.birthday,
      email: userLogin.value.email,
      gender: userLogin.value.gender,
      name: userLogin.value.name,
      password: userLogin.value.password,
      phone: userLogin.value.phone,
    });

    const passChange = reactive({
      passwordOld: "",
      rePasswordOld: "",
      newPassword: "",
    });

    const handleSaveChanges = () => {
      store.dispatch("auth/updateAUserAction", {
        id: userLogin.value.id,
        data: userData,
      });
    };

    const handleChangePassword = () => {
      if (passChange.passwordOld != userData.password) {
        handleAlertBoxGlobal("The old password is not correct!", "Danger");
      } else if (passChange.passwordOld != passChange.rePasswordOld) {
        handleAlertBoxGlobal(
          "Password imported again does not match!",
          "Danger"
        );
      } else {
        userData.password = passChange.newPassword;

        store.dispatch("auth/updateAUserAction", {
          id: userLogin.value.id,
          data: userData,
        });

        passChange.rePasswordOld =
          passChange.passwordOld =
          passChange.newPassword =
            "";
      }
    };

    return {
      userLogin,
      userData,
      passChange,
      handleSaveChanges,
      handleChangePassword,
    };
  },
};
</script>

<style>
.label-profile {
  margin-top: 0px !important;
}
</style>
