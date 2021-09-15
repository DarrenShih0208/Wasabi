<template>
  <div class="abouttext">
    <!-- bootstrap img-->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./imgs/case1.jpg">
        </div>
        <div class="carousel-item">
          <img src="./imgs/case2.jpg">
        </div>
        <div class="carousel-item">
          <img src="./imgs/case3.jpg">
        </div>
      </div>
      <!-- bootstrap button-->
      <button class="carousel-control-prev d-block w-50" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next d-block w-50" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <h1>Description</h1>
    <div class="select">
      <ul> 
        <li>Take the hand-crank drink as the theme.</li>            
        <li>Use Vue Cli to build.</li>
        <li>Write content styles in scss.</li>
        <li>Component modular management.</li>
        <li>Switch props in online orders to change the corresponding input types, including text, select, and radio.</li>
        <li>Use Vue-Router to switch pages.</li>
        <li>Set the Global parameters, so that the color and theme of the page will be changed accordingly.</li>
        <li>Concatenate a group of beverage pictures and price list data api, present in the online order.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.abouttext {
  h1 {
    text-align: center;
  }
  img {
    display: block;
    width: 60%;
    height: 500px;
    margin : auto;
  }
  .select {
    position: relative;
    margin-top: 30px;
    left: 30%;
  }
} 
</style>