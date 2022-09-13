<template>
  <form action="" @submit.prevent.stop="onSubmit">
    <h1>登入</h1>
    <div class="input">
      <label for="email">Email</label>
      <input
        v-model="email"
        type="email"
        name="email"
        id="email"
        placeholder="請輸入Eamil"
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
        placeholder="請輸入密碼"
        required
      />
    </div>
    <div class="input-btn">
      <button type="submit" class="btn login" :disabled="isLoading">
        {{ isLoading ? "Loading..." : "登入" }}
      </button>
    </div>
  </form>
</template>

<script>
import app from "./../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "@vue/reactivity";
import router from "@/router";
export default {
  setup() {
    const auth = getAuth(app);
    const email = ref("");
    const password = ref("");
    const isLoading = ref(false);
    // function
    const onSubmit = () => {
      isLoading.value = true;
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          // Signed in
          router.push("/todo");
          isLoading.value = false;
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              alert("信箱不存在");
              break;
            case "auth/invalid-email":
              alert("信箱格式不正確");
              break;
            case "auth/wrong-password":
              alert("密碼錯誤");
              break;
            default:
              break;
          }
          isLoading.value = false;
        });
    };
    return {
      email,
      password,
      isLoading,
      onSubmit,
    };
  },
};
</script>
