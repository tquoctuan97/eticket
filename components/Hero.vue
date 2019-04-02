<template>
  <div class="hero-img">
    <h1 class="hero-title">
      Discover Events
      In Ho Chi Minh City
    </h1>
    <p class="hero-people-looking">
      People are looking:
      <span
        style="font-weight: bold"
      >Color Me Run 2019, Full Stack or DevOps, VIETNAM CHAMPIONSHIP...</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero-img {
  background-image: url("/bg-hero-eticket.jpg");
  width: 100%;
  height: 386px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero-title {
  color: white;
}

.hero-people-looking {
  padding-top: 20px;
  color: white;
}
</style>
