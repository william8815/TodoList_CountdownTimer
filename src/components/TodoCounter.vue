<template>
  <section class="todo-counter">
    <div v-if="!list.isClicked" class="ban-section"></div>
    <h1 class="title">{{ isLoading ? "" : list.title }}</h1>
    <div class="counter">
      <div class="tomato">
        <input
          v-model="hour"
          type="number"
          min="0"
          max="23"
          @blur="hour ? (hour = hour) : (hour = 0)"
        />
        <input
          v-model="minute"
          type="number"
          min="0"
          max="59"
          @blur="minute ? (minute = minute) : (minute = 0)"
        />
        <input
          v-model="second"
          type="number"
          min="0"
          max="59"
          @blur="second ? (second = second) : (second = 0)"
        />
      </div>
    </div>
    <div class="btn-section">
      <button @click.stop="resetCount">reset</button>

      <button v-if="isStop" @click.stop="stopCount">stop</button>
      <button
        v-else
        @click.stop="startCount"
        :disabled="isStart"
        :class="{ disabled: isStart }"
      >
        start
      </button>

      <div>
        <button v-if="isEnd" @click.stop="endCount">finished</button>
        <button v-else class="white-btn"></button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup(props, { emit }) {
    const hour = ref(0);
    const minute = ref(0);
    const second = ref(0);
    const time = ref(0);
    const counter = ref(null);
    const isStart = computed(() => {
      return hour.value === 0 && minute.value === 0 && second.value === 0;
    });
    const isStop = ref(false);
    const isEnd = ref(false);
    const ringtone = new Audio(
      "http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3"
    );

    const store = useStore();
    const list = ref(store.state.list);
    const isLoading = ref(false);

    const startCount = () => {
      isStop.value = !isStop.value;
      time.value =
        Number.parseInt(hour.value * 60 * 60) +
        Number.parseInt(minute.value * 60) +
        Number.parseInt(second.value);
      window.clearInterval(counter.value);
      counter.value = setInterval(() => {
        if (time.value !== 0) {
          time.value -= 1;
          hour.value = Math.floor(time.value / 60 / 60);
          minute.value = Math.floor(time.value / 60);
          second.value = time.value % 60;
        } else {
          ringtone.play();
          ringtone.loop = true;
          isStop.value = false;
          isEnd.value = true;
        }
      }, 1000);
    };
    const stopCount = () => {
      window.clearInterval(counter.value);
      isStop.value = !isStop.value;
    };
    const endCount = async () => {
      ringtone.pause();
      window.clearInterval(counter.value);
      emit("finishedTodo", store.state.list.id);
      store.commit("changeTitle", {
        id: "",
        title: "請選擇清單項目",
        isClicked: false,
      });
      isEnd.value = false;
    };
    const resetCount = () => {
      window.clearInterval(counter.value);
      hour.value = 0;
      minute.value = 0;
      second.value = 0;
    };

    watch(store.state, (newState) => {
      list.value = newState.list;
    });

    return {
      hour,
      minute,
      second,
      isStart,
      isStop,
      isEnd,
      list,
      isLoading,
      startCount,
      stopCount,
      endCount,
      resetCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo-counter {
  width: 100%;
  height: 100%;
  background-color: #fff;
  grid-row: span 2;
  padding: 1rem;
  border-radius: 20px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
  .title {
    text-align: center;
    padding: 1rem;
    font-size: 2rem;
  }
  .counter {
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    .tomato {
      text-align: center;
      width: 35vh;
      height: 35vh;
      line-height: 35vh;
      margin: 0 auto;
      background-color: #fd8d8d;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    input {
      width: 8vh;
      height: 8vh;
      font-size: 2rem;
      text-align: center;
    }
    input:nth-child(2) {
      margin: 0 1rem;
    }
  }
  .btn-section {
    display: flex;
    justify-content: space-around;
    button {
      width: 10vw;
      max-width: 200px;
      height: 80px;
      font-size: 1.25rem;
      border: none;
      border-radius: 30px;
      background-color: var(--main-color);
      cursor: pointer;
    }
    button:nth-child(2),
    button:nth-child(3) {
      margin: 0 1rem;
    }
    button.disabled {
      background-color: var(--main-light);
    }
    .white-btn {
      background-color: transparent;
    }
  }
}
.todo-counter .ban-section {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #333, $alpha: 0.5);
  border-radius: 20px;
  z-index: 2;
}
@media screen and (min-width: 768px) {
  .todo-counter {
    grid-column: 2/3;
    /* height: 100vh; */
    .counter {
      .tomato {
        width: 100%;
        max-width: 500px;
        height: 100%;
        max-height: 500px;
      }
      input {
        width: 10vw;
        height: 10vw;
        max-width: 120px;
        max-height: 120px;
        font-size: 3rem;
      }
    }
  }
}
</style>
