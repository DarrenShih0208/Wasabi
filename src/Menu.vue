<template>
  <div class="topselects">
    <router-link class="selects SC2" to="/about">產品介紹</router-link>
    <router-link class="selects SC1" to="/order">線上訂餐</router-link>
    <router-link class="selects SC3" to="/suggest">意見反饋</router-link>
  </div>
</template>

<style scoped lang="scss">
.topselects {
  padding: 15px 20px;
  height: 70px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  .selects {
    color: rgb(139, 46, 66);
    font-family:unset;
    padding: 2px 60px;
    text-decoration:none;
  }
}
</style>
