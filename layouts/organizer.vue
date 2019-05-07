<template>
  <v-app>
    <TopMenu/>
    <div class="organize-content-wrapper mt-5">
      <div class="organizer__intro">
        <div class="organizer__intro__title">Welcome to eTicket for Event Organizer</div>
        <div class="organizer__intro__box-wrapper">
          <div class="organizer__intro__box">
            <div class="organizer--icon">
              <img src="/organizer/appointment.png">
            </div>
            <div class="organize--title">Multiple Events</div>
            <div
              class="organize--content"
            >Distinctively transform error-free infrastructures whereas premier initiatives. Rapidiously benchmark functionalized functionalities and virtual customer service.</div>
          </div>
          <div class="organizer__intro__box">
            <div class="organizer--icon">
              <img src="/organizer/qr-code.png">
            </div>
            <div class="organize--title">Multiple Events</div>
            <div
              class="organize--content"
            >Distinctively transform error-free infrastructures whereas premier initiatives. Rapidiously benchmark functionalized functionalities and virtual customer service.</div>
          </div>
          <div class="organizer__intro__box">
            <div class="organizer--icon">
              <img src="/organizer/event-ticket (1).png">
            </div>
            <div class="organize--title">Multiple Events</div>
            <div
              class="organize--content"
            >Distinctively transform error-free infrastructures whereas premier initiatives. Rapidiously benchmark functionalized functionalities and virtual customer service.</div>
          </div>
          <div class="organizer__intro__box">
            <div class="organizer--icon">
              <img src="/organizer/analytics.png">
            </div>
            <div class="organize--title">Multiple Events</div>
            <div
              class="organize--content"
            >Distinctively transform error-free infrastructures whereas premier initiatives. Rapidiously benchmark functionalized functionalities and virtual customer service.</div>
          </div>
        </div>
      </div>
      <div class="organizer__content">
        <nuxt/>
      </div>
    </div>
  </v-app>
</template>

<script>
import TopMenu from "@/components/containers/organizer/TopMenu.vue";
// import Footer from "@/components/containers/organizer/Footer.vue";
export default {
  components: {
    TopMenu
  }
};
</script>

<style>
.organize-content-wrapper {
  background: url("/bgo.png") no-repeat;
  background-size: cover;
  min-height: calc(100vh - 64px);
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
}
.organizer__intro {
  width: 65%;
  padding: 15px;
}
.organizer__content {
  width: 35%;
  padding: 15px;
}
.organizer__intro__title {
  color: #575bde;
  font-weight: 600;
  font-size: 2.5rem;
  width: 80%;
  max-width: 450px;
  letter-spacing: 0.8px;
  margin-top: 35px;
  margin-bottom: 25px;
  padding-left: 20px;
}
.organizer__intro__box-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  width: 90%;
}
.organizer__intro__box {
  width: 50%;
  padding: 20px;
  color: #818181;
}
.organizer--icon img {
  width: 32px;
  height: 32px;
}
.organize--title {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 15px;
  margin-top: 5px;
}
.organize--content {
}
@media only screen and (max-width: 768px) {
  .organizer__intro,
  .organizer__content {
    width: 100%;
  }
  .organize-content-wrapper {
    flex-direction: column;
  }
}
@media only screen and (max-width: 560px) {
  .organizer__intro__box,
  .organizer__intro__title,
  .organizer__intro__box-wrapper {
    width: 100%;
  }
}
</style>
