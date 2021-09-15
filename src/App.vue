<template>
  <div class="appDiv">
    <div class="app-root" :class="themeClass">
      <div class="app-container">
        <p style="color: white">{{ msg }}</p>
        <select v-model="theme">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </div>
    <nav>
      <Menu/>
    </nav>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Menu from './Menu';
import Footer from './Footer';

export default{
  name: 'app',
  components:{
    Menu,
    Footer,
  },
  data () {
    return {
      msg: '點我改顏色!!',
      theme: 'red'
    }
  },
  computed: {
    themeClass() {
      return `theme-${this.theme}`;
    }
  }
}
</script>

<style scoped lang="scss">
@import './themes.scss';
$back-color: blue;
$contents-color:rgb(54, 179, 218);

.appDiv {
  .theme-red{
    background-color: $theme-red;
  }
  .theme-green{
    background-color: $theme-green;
  }
  .theme-blue{
    background-color: $theme-blue;
  }
  nav {
    height: 70px;
    padding-bottom: 10px;
    background-color: $contents-color;
    margin-bottom: 30px;
  }
  .footer {
    position: absolute;
    height: 70px;
    margin-top: -50px;
  }
}
</style>
