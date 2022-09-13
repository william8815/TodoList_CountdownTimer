<template>
  <Header />
  <main class="todo">
    <TodoSet @afterSubmit="handleSubmit" />
    <TodoList
      :initial_list="list"
      @deleteTodo="handleDelete"
      @restoreTodo="handleRestore"
    />
    <TodoCounter @finishedTodo="handleFinishedTodo" />
  </main>
</template>

<script>
import Header from "./../components/TodoHeader.vue";
import TodoSet from "./../components/TodoSet.vue";
import TodoList from "./../components/TodoList.vue";
import TodoCounter from "./../components/TodoCounter.vue";
import app from "./../utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { onBeforeMount } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
export default {
  components: {
    Header,
    TodoSet,
    TodoList,
    TodoCounter,
  },
  setup() {
    const auth = getAuth(app);
    const store = getFirestore(app);
    const list = ref([]);
    const isLoading = ref(false);
    const userId = ref("");
    const setUser = onAuthStateChanged(auth, async (user) => {
      userId.value = user.uid;
    });

    const getList = () => {
      list.value.splice(0, list.value.length);
      onAuthStateChanged(auth, async (user) => {
        const querySnapshot = await getDocs(collection(store, `${user.uid}`));
        querySnapshot.forEach((doc) => {
          list.value.push({
            id: doc.id,
            title: doc.data().title,
            date: doc.data().date,
            createdAt: doc.data().createdAt,
            isFinished: doc.data().isFinished,
          });
        });
      });
    };
    // handle listener
    const handleSubmit = (state) => {
      isLoading.value = state;
      getList();
      isLoading.value = false;
    };
    const handleDelete = async (id) => {
      await deleteDoc(doc(store, `${userId.value}`, id));
      getList();
      console.log(list.value);
    };
    const handleRestore = async (id) => {
      await updateDoc(doc(store, `${userId.value}`, id), {
        isFinished: false,
      });
      getList();
    };
    const handleFinishedTodo = async (listId) => {
      await updateDoc(doc(store, `${userId.value}`, listId), {
        isFinished: true,
      });
      getList();
    };

    onBeforeMount(setUser);
    onBeforeMount(getList);

    return {
      handleSubmit,
      handleDelete,
      handleRestore,
      handleFinishedTodo,
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
}
@media screen and (min-width: 768px) {
  .todo {
    height: calc(100vh - 80px);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
  }
}
</style>
