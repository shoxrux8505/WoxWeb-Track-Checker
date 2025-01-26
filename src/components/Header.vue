<template>


  <h2>
    <img src="../assets/img/WOXWEB LOGO.png" alt="LOGO">
    Expense Tracker
  </h2>

</template>
<style scoped>

h2{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
}
h2 img{
  width: 390px;
  height: 100px;
  transform: scale(0.5);
  filter: drop-shadow(0 0 10px royalblue);
}

@media screen and (max-width: 390px) {
  h1 img {

    transform: scale(0.2);
  }
}
</style>