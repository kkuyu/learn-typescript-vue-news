<template>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :userInfo="fetchedUser">
      <div slot="userName">{{ fetchedUser.id }}</div>
      <span slot="userKarma">{{ fetchedUser.karma }} karma</span>
    </user-profile>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
import bus from "../utils/bus";

export default Vue.extend({
  components: {
    UserProfile,
  },
  created(): void {
    bus.$emit("off:progress");
  },
  computed: {
    ...mapGetters(["fetchedUser"]),
  },
});
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>
