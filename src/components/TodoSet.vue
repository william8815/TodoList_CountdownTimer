<template>
  <section class="todoset">
    <form action="" @submit.prevent.stop="addTodo">
      <div class="input thing-section">
        <input
          v-model="thing"
          type="text"
          name="thing"
          id="thing"
          placeholder="要做甚麼事情 ?"
          required
        />
      </div>
      <div class="input date-section">
        <input v-model="date" type="date" name="date" id="date" required />
      </div>
      <button type="submit" class="add-btn" :disabled="isLoading">
        {{ isLoading ? "Adding..." : "Add" }}
      </button>
    </form>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import app from "./../utils/firebase";
import { onBeforeMount } from "@vue/runtime-core";
export default {
  setup(props, context) {
    const auth = getAuth(app);
    const store = getFirestore(app);
    const thing = ref("");
    const date = ref("");
    const isLoading = ref(false);
    const userId = ref("");
    const setUserId = onAuthStateChanged(auth, (user) => {
      userId.value = user.uid;
    });
    onBeforeMount(setUserId);
    const addTodo = async () => {
      try {
        isLoading.value = true;
        context.emit("afterSubmit", true);
        await addDoc(collection(store, `${userId.value}`), {
          title: thing.value,
          date: date.value,
          isFinished: false,
          createdAt: Timestamp.now(),
        });

        thing.value = "";
        date.value = "";
        isLoading.value = false;
      } catch (e) {
        console.error("Error adding document: ", e);
        isLoading.value = false;
      }
    };
    return {
      thing,
      date,
      isLoading,
      addTodo,
    };
  },
};
</script>

<style lang="scss" scoped>
.todoset {
  width: 100%;
  height: auto;
  background-color: var(--main-color);
  border-radius: 20px;
  padding: 2.5rem 3rem;
  text-align: center;
  .input {
    height: 50px;
    margin-bottom: 1.5rem;
  }
  input {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    padding: 0.5rem;
  }
  .add-btn {
    font-size: 1.5rem;
    border: none;
    border-radius: 20px;
    width: 150px;
    height: 50px;
    background-color: var(--main-light);
    margin-top: 1rem;
    cursor: pointer;
  }
}
</style>
