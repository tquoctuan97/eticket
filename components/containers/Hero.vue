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
    <InputSearch/>
  </div>
</template>

<script>
import InputSearch from "@/components/elements/InputSearch";
export default {
  components: {
    InputSearch
  },
  data: () => ({
    dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"],
    dropdown_icon: [
      { text: "list", callback: () => console.log("list") },
      { text: "favorite", callback: () => console.log("favorite") },
      { text: "delete", callback: () => console.log("delete") }
    ],
    dropdown_edit: [
      { text: "100%" },
      { text: "75%" },
      { text: "50%" },
      { text: "25%" },
      { text: "0%" }
    ]
  })
};
</script>

<style>
.hero-img {
  background-image: url("/bg-hero-eticket.jpg");
  background-size: cover;
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
