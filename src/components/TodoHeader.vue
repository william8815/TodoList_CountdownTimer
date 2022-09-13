<template>
  <header>
    <h1 class="brand">TodoList</h1>
    <div class="user">
      <div class="user__name">{{ username }} <span>您好</span></div>
      <button class="signout" @click="signoutAccount">登出</button>
    </div>
  </header>
</template>

<script>
import app from "./../utils/firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import router from "@/router";
import { onBeforeMount, ref } from "@vue/runtime-core";
export default {
  setup() {
    const auth = getAuth(app);
    const username = ref("");
    const setuser = onAuthStateChanged(auth, (user) => {
      if (user) {
        username.value = user.displayName;
      } else {
        username.value = "使用者";
      }
    });
    onBeforeMount(setuser);
    const signoutAccount = () => {
      signOut(auth).then(() => {
        router.push("/");
      });
    };
    return {
      username,
      setuser,
      signoutAccount,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 80px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    color: var(--main-dark);
  }
  .user {
    display: flex;
    justify-content: space-between;
    &__name {
      font-size: 1.5rem;
      font-weight: 700;
    }
    span {
      color: var(--main-dark);
    }
    .signout {
      width: 80px;
      height: 30px;
      line-height: 30px;
      font-size: 1rem;
      margin-left: 1rem;
      border: none;
      border-radius: 15px;
      background-color: var(--main-color);
      color: #fff;
      cursor: pointer;
    }
    .signout:hover {
      background-color: var(--main-dark);
    }
  }
}
</style>
