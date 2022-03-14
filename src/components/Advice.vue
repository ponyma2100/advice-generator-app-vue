<template>
  <div class="advice-container">
    <div class="info">
      <div class="title">
        <p>#117</p>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex placeat
          aperiam incidunt eius eaque dolores! Ipsam dolores beatae fugiat
          praesentium odit repudiandae ratione unde, placeat dolor eaque commodi
          eveniet.
        </p>
      </div>
      <div class="divider">
        <img src="../assets/pattern-divider-desktop.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  width: 360px;
  height: 30vh;
  background: hsl(217, 19%, 24%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.title p {
  color: hsl(150, 100%, 66%);
}

.divider img {
  width: 80%;
}
</style>