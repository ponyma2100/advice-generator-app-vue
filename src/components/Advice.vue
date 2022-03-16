<template>
  <div class="advice-container">
    <div class="info">
      <div class="title">
        <p>ADVICE # {{ adviceslip.id }}</p>
      </div>
      <div class="content">
        <p v-if="!adviceslip.advice">Loading...</p>
        <p v-else>“{{ adviceslip.advice }}”</p>
      </div>
      <div class="divider">
        <img src="../assets/pattern-divider-desktop.svg" alt="" />
      </div>
      <div class="btn" @click="handleChange">
        <img src="../assets/icon-dice.svg" alt="" />
        <radialGradient id="Gradient1">
          <stop offset="0%" stop-color="red" />
          <stop offset="100%" stop-color="blue" />
        </radialGradient>
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

    const handleChange = () => {
      loadAdvice();
    };

    return { adviceslip, handleChange };
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
  max-width: 37vw;
  min-width: 85vw;
  min-height: 37vh;
  background: hsl(217, 19%, 24%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  font-size: 24px;
}
.title p {
  color: hsl(150, 100%, 66%);
  font-size: 14px;
}

.content {
  margin: 0 10px;
}

.divider {
  margin-bottom: 22px;
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
  cursor: pointer;
}

.btn:hover {
  box-shadow: 0 0 0.5em 0 rgb(128 0 128 / 50%), 0 0 0.75em 0 hsl(150, 100%, 66%);
}

@media screen and (min-width: 400px) {
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
}

/* @media screen and (min-width: 375px) {
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

  .content {
    margin: 0 10px;
  }

  .divider {
    margin-bottom: 22px;
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
    cursor: pointer;
  }

  .btn:hover {
    box-shadow: 0 0 0.5em 0 rgb(128 0 128 / 50%),
      0 0 0.75em 0 hsl(150, 100%, 66%);
  }
} */
</style>