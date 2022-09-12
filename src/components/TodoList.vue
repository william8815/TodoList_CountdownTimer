<template>
  <section class="todolist">
    <div class="filter-bar">
      <div>
        <span
          class="tab"
          @click="filterUnfinished"
          :class="{ active: isActive === false }"
          >未完成</span
        >
        <span
          class="tab"
          @click="filterFinished"
          :class="{ active: isActive === true }"
          >已完成</span
        >
      </div>
      <span class="tab">全部刪除</span>
    </div>
    <div class="list scrollbar">
      <div v-if="isLoading">...Loading</div>
      <ul v-else>
        <li class="list__item" v-for="item in list" :key="item.id">
          <div class="list__text">
            <div>
              <i>{{ item.date }}</i>
            </div>
            <span>{{ item.title }}</span>
          </div>
          <div class="btn-section">
            <button class="btn"><i class="icon fa-solid fa-pen"></i></button>
            <button class="btn">
              <i class="icon trash fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { onBeforeMount, watch } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
export default {
  props: {
    initial_list: Array,
  },
  setup(props) {
    const list = ref([]);
    const isLoading = ref(false);
    const isActive = ref(false);

    const showList = () => {
      isLoading.value = true;
      list.value = props.initial_list.map((item) => ({
        ...item,
      }));
      console.log(props.initial_list);
      isLoading.value = false;
    };
    onBeforeMount(showList);

    const filterUnfinished = () => {
      isActive.value = false;
      list.value = props.initial_list.filter(
        (item) => item.isFinished === false
      );
    };
    const filterFinished = () => {
      isActive.value = true;
      list.value = props.initial_list.filter(
        (item) => item.isFinished === true
      );
    };
    watch(props.initial_list, () => {
      showList();
    });

    return {
      props,
      list,
      isLoading,
      isActive,
      filterUnfinished,
      filterFinished,
    };
  },
};
</script>

<style lang="scss" scoped>
.todolist {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba($color: #fff, $alpha: 0.5);
  border-radius: 20px;
  padding: 1rem;
  /* tabs */
  .filter-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .tab {
    text-align: center;
    background-color: #fff;
    border: 2px solid var(--main-light);
    border-radius: 20px;
    margin-right: 1rem;
    padding: 0.5rem;
    cursor: pointer;
  }
  .tab.active {
    background-color: var(--main-color);
    border: 2px solid var(--main-color);
    color: #fff;
  }
  .tab:last-child {
    margin-right: 0px;
  }
  .tab:hover {
    background-color: var(--main-color);
    border: 2px solid var(--main-dark);
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
  /* list */

  .list {
    height: calc(100% - 57px);
    overflow-y: scroll;
    &.scrollbar {
      padding-left: 6px;

      // 整體的樣式
      &::-webkit-scrollbar {
        width: 6px;
      }

      // bar的樣式
      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: var(--main-dark);
      }
    }
    ul {
      margin-right: 6px;
    }
  }
  .list__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--main-color);
    padding: 1rem 1rem;
    font-size: 1.25rem;
    border-radius: 20px;
    margin-bottom: 1rem;
  }
  .btn {
    width: 40px;
    border: none;
    border-radius: 10px;
    margin-left: 1rem;
    .icon {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 1rem;
      &.trash {
        color: rgb(200, 13, 13);
      }
    }
  }
}
</style>