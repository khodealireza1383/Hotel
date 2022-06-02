<template>
  <div class="airplane">
    <div class="container">
      <div class="play-airplane"></div>
    </div>
    <div class="shahr">
      <img src="../../assets/img/33.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.airplane {
  width: 100%;
  height: 80vh;
}
.container {
  display: 100%;
  height: 242px;
  display: flex;
  align-items: center;
}
.play-airplane {
  width: 250px;
  height: 100px;
  background-image: url("../../assets/img/airplane4.png");
  background-repeat: no-repeat;
  animation: move 15s ease infinite;
}
.shahr img {
  width: 70%;
  height: 400px;
  display: block;
  margin: 0 auto;
}
@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-2230px);
  }
  75% {
    background-image: url(../../assets/img/airplane5.png);
    transform: translateX(300px);
  }
  85% {
    background-image: url(../../assets/img/airplane4.png);
  }
}
@media only screen and (max-width: 1200px) {
  .airplane {
    height: 75vh;
  }
  .container {
    height: 200px;
    display: flex;
    align-items: flex-start;
  }
}
@media only screen and (max-width: 1024px) {
  .airplane {
    height: 63vh;
  }
  .container {
    height: 110px;
    display: flex;
    align-items: flex-start;
  }
}
@media only screen and (max-width: 768px) {
  .airplane {
    height: 75vh;
  }
  .container {
    height: 120px;
    display: flex;
    align-items: flex-start;
    position: relative;
    top: -30px;
  }
  .shahr img {
    width: 90%;
    height: 400px;
    display: block;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 480px) {
  .airplane {
    height: 75vh;
  }
  .container {
    height:200px;
    display: flex;
    align-items: flex-start;
    position: relative;
    top: 0px;
  }
  .shahr img {
    width: 100%;
    height: 400px;
    display: block;
    margin: 0 auto;
  }
}
</style>