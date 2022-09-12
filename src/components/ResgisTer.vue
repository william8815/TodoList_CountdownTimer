<template>
  <form action="" @submit.prevent.stop="onSubmit()">
    <h1>註冊</h1>
    <div class="input">
      <label for="text">名稱</label>
      <input v-model="name" type="text" name="text" id="text" required />
    </div>
    <div class="input">
      <label for="email">Email</label>
      <input
        v-model="email"
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
        required
      />
    </div>
    <div class="input">
      <label for="password">密碼</label>
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        required
      />
    </div>
    <div class="input">
      <label for="passwordCheck">確認密碼</label>
      <input
        v-model="passwordCheck"
        type="password"
        name="passwordCheck"
        id="passwordCheck"
        required
      />
    </div>
    <div class="input-btn">
      <button type="submit" class="btn login" :disabled="isLoading">
        {{ isLoading ? "Loading..." : "註冊" }}
      </button>
    </div>
  </form>
</template>

<script>
import app from "./../utils/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ref } from "@vue/reactivity";
import router from "@/router";
export default {
  setup() {
    const auth = getAuth(app);
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const passwordCheck = ref("");
    const isLoading = ref(false);
    // function
    const onSubmit = () => {
      if (password.value !== passwordCheck.value) {
        console.log("密碼有誤");
        return;
      }
      isLoading.value = true;
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name.value,
          });
          router.push("/todo");
          isLoading.value = false;
        })
        .catch((error) => {
          console.log(error.code, error.message);
          isLoading.value = false;
        });
    };
    return {
      name,
      email,
      password,
      passwordCheck,
      isLoading,
      onSubmit,
    };
  },
};
</script>
