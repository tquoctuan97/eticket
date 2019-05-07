<template>
  <section class="mt-5 pt-5 pb-5" style="background-color:#fff">
    <div class="title-box center">
      <h3 class="headline">Event Category</h3>
    </div>
    <div class="list-wrapper center category-wrapper">
      <!--news items-->
      <div class="category_item">
        <img class="image-items" src="/ic_category/ic_music.png">
        <p>Music</p>
      </div>
      <div class="category_item">
        <img class="image-items" src="/ic_category/ic_arts.png">
        <p>Arts</p>
      </div>
      <div class="category_item">
        <img class="image-items" src="/ic_category/ic_business.png">
        <p>Business</p>
      </div>
      <div class="category_item">
        <img class="image-items" src="/ic_category/ic_parties.png">
        <p>Parties</p>
      </div>
      <div class="category_item">
        <img class="image-items" src="/ic_category/ic_classes.png">
        <p>Classes</p>
      </div>
      <div class="category_item">
        <img class="image-items" src="/ic_category/ic_sport.png">
        <p>Sport</p>
      </div>
      <div class="category_item">
        <img class="image-items" src="/ic_category/ic_food.png">
        <p>Food</p>
      </div>
      <div class="category_item">
        <img class="image-items" src="/ic_category/ic_event_other.png">
        <p>Other</p>
      </div>
      <!--news items-->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.category-wrapper {
  justify-content: space-between !important;
}
.image-items {
  border-radius: 50%;
  overflow: hidden;
  transition: 0.3s all ease-in-out;
}
.image-items + * {
  transition: 0.3s all ease-in-out;
}
.category_item {
  cursor: pointer;
  width: calc(10%);
}
.category_item:hover .image-items {
  transform: translateY(-8px);
  box-shadow: 0px 10px 11px 0px rgba(0, 0, 0, 0.1);
}
.category_item:hover .image-items + * {
  color: #ff4d00;
}
@media (max-width: 768px) {
  .category-wrapper {
    justify-content: flex-start !important;
  }
  .image-items {
    width: 70px !important;
  }
  .category_item {
    width: calc(15%);
    min-width: 75px;
    margin: 10px;
    height: auto !important;
  }
}
</style>
