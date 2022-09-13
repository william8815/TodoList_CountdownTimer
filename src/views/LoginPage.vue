<template>
  <div class="container">
    <section class="form-section">
      <ResgisTer v-if="signState" />
      <SignIn v-else />
    </section>
    <section class="btn-section">
      <button v-if="signState" @click="signState = false">返回登入</button>
      <button v-else @click="signState = true">前往註冊</button>
    </section>
  </div>
</template>

<script>
import SignIn from "./../components/SignIn.vue";
import ResgisTer from "../components/ResgisTer.vue";
import { ref } from "vue";
export default {
  components: {
    SignIn,
    ResgisTer,
  },
  setup() {
    const signState = ref(false);
    return {
      signState,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 90vw;
  height: 60vh;
  max-width: 600px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  /* form */
  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  div.input {
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    input {
      margin: 0.75rem 0;
      height: 40px;
      border: 1px solid #a4a4a4;
      border-radius: 10px;
      text-indent: 10px;
      font-size: 1rem;
    }
    input:focus {
      border: 1px solid #fff;
      outline: 2px solid var(--main-color);
    }
  }
  .input-btn {
    text-align: center;
    margin-top: 1rem;
    .btn {
      width: 100px;
      height: 40px;
      font-size: 1rem;
      border: none;
      border-radius: 20px;
      background-color: var(--main-color);
      font-weight: 700;
      color: #fff;
      cursor: pointer;
    }
    .btn:hover {
      border: 2px solid var(--main-dark);
      background-color: var(--main-light);
      transition: background-color 0.3s ease-in-out;
      color: var(--main-dark);
    }
  }
  .btn-section {
    align-self: flex-end;
    button {
      margin: 1rem 0;
      font-size: 1rem;
      background-color: transparent;
      border: none;
      color: blue;
      text-decoration: underline;
    }
  }
}
</style>
