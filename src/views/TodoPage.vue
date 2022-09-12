<template>
  <Header />
  <main class="todo">
    <TodoSet @afterSubmit="handleSubmit" />
    <TodoCounter />
    <TodoList :initial_list="list" @deleteTodo="handleDelete" />
  </main>
</template>

<script>
import Header from "./../components/TodoHeader.vue";
import TodoSet from "./../components/TodoSet.vue";
import TodoList from "./../components/TodoList.vue";
import TodoCounter from "./../components/TodoCounter.vue";
import app from "./../utils/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
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
    const store = getFirestore(app);
    const list = ref([]);
    const isLoading = ref(false);
    const getList = async () => {
      isLoading.value = true;
      const querySnapshot = await getDocs(collection(store, "list"));
      querySnapshot.forEach((doc) => {
        list.value.push({
          id: doc.id,
          title: doc.data().title,
          date: doc.data().date,
          createdAt: doc.data().createdAt,
          isFinished: doc.data().isFinished,
        });
      });
      isLoading.value = false;
    };
    const handleSubmit = (state) => {
      isLoading.value = state;
      list.value.splice(0, list.value.length);
      getList();
      isLoading.value = false;
    };
    const handleDelete = async (id) => {
      await deleteDoc(doc(store, "list", id));
    };
    onBeforeMount(getList);

    return {
      handleSubmit,
      handleDelete,
      isLoading,
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  height: calc(100vh - 80px);
  padding: 1rem;
}
@media screen and (min-width: 768px) {
  .todo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 1rem;
  }
}
</style>
