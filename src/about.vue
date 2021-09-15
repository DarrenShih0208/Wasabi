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
        <li>以手搖飲料為主題</li>            
        <li>使用Vue Cli建置。</li>
        <li>以scss撰寫內容樣式。</li>
        <li>component模組化管理。</li>
        <li>於線上訂單實現切換prop來改變對應的輸入類型。</li>
        <li>使用Vue-Router切換頁面。</li>
        <li>設定Global參數、讓頁面的顏色、主題會隨著更換</li>
        <li>串接一組飲料圖片及價錢的列表資料api，呈現在線上訂單中</li>
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
    left: 42%;
  }
} 
</style>