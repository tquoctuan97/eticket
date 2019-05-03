<template>
  <section class="mt-5 pa-5" style="background-color:#fff">
    <div class="title-box center">
      <h3>Event Category</h3>
    </div>
    <div class="list-wrapper center" style="justify-content: space-between">
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
}
.category_item:hover .image-items {
  transform: translateY(-8px);
  box-shadow: 0px 10px 11px 0px rgba(0, 0, 0, 0.1);
}
.category_item:hover .image-items + * {
  color: #ff4d00;
}
</style>
