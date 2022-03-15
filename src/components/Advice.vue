<template>
  <div class="advice-container">
    <div class="info">
      <div class="title">
        <p>ADVICE # {{ adviceslip.id }}</p>
      </div>
      <div class="content">
        <p>
          {{ adviceslip.advice }}
        </p>
      </div>
      <div class="divider">
        <img src="../assets/pattern-divider-desktop.svg" alt="" />
      </div>
      <div class="btn">
        <img src="../assets/icon-dice.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import getAdvice from "../composables/getAdvice";

export default {
  setup() {
    const { loadAdvice, adviceslip } = getAdvice();

    loadAdvice();

    return { adviceslip };
  },
};
</script>

<style scoped>
.advice-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  width: 28vw;
  height: 35vh;
  max-width: 37vw;
  min-width: 260px;
  min-height: 260px;
  background: hsl(217, 19%, 24%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  font-size: 28px;
}
.title p {
  color: hsl(150, 100%, 66%);
  font-size: 14px;
}

.divider img {
  width: 80%;
}
.btn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: hsl(150, 100%, 66%);
  position: absolute;
  bottom: -33px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>