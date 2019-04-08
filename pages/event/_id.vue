<template>
  <v-app>
    <div>
      <div>
        <div
          :style="{backgroundImage: 'url(https://eticket-vhu.herokuapp.com' + event.imageURL +')'}"
          class="hero-img"
        ></div>
        <div class="event__content">
          <div>
            <h1>{{ event.title }}</h1>
            <p>By {{event.owner }}</p>
          </div>
          <div class="event__information">
            <div class="event__information__item">
              <v-icon left>calendar_today</v-icon>
              <div>
                <p>{{event.start_date}}</p>
                <p>{{event.start_time}}:00 - {{event.end_time}}:00</p>
              </div>
            </div>
            <div class="event__information__item">
              <v-icon left>location_city</v-icon>
              <div>
                <p>{{event.locationName }}</p>
                <p>{{event.address }}</p>
              </div>
            </div>
            <div class="event__information__item">
              <v-icon left>shopping_cart</v-icon>
              <div>
                <p>$14 - $20</p>
                <p>Pay free tickets within 3 days before the event</p>
              </div>
            </div>
          </div>
          <div class="event__action">
            <div class="event__action__item">
              <v-icon>favorite_border</v-icon>
              <span>Like</span>
            </div>
            <div class="event__action__item">
              <v-icon>share</v-icon>
              <span>Share</span>
            </div>
            <div class="event__action__item">
              <v-icon>directions</v-icon>
              <span>Directions</span>
            </div>
            <div class="event__action__item">
              <v-icon>more_horiz</v-icon>
              <span>More</span>
            </div>
          </div>
          <div>
            <p>{{event.locationName }}</p>

            <p>{{event.address }}</p>
          </div>
          <section>
            <h3>About</h3>
            <div>
              <span v-html="event.description"></span>
            </div>
          </section>
          <section>
            <h3>Contact</h3>
            <h4>{{event.contactPerson}}</h4>
            <h4>{{event.contactNumber}}</h4>
          </section>
        </div>
      </div>
    </div>
  </v-app>
</template>
 
<script>
import axios from "axios";

export default {
  demo: [
    {
      id: 6,
      title: "CRAZY Water Festival - V Wave 2019",
      address:
        "2 Đinh Tiên Hoàng, Phường Đa Kao, Quận 1, Thành Phố Hồ Chí Minh",
      locationName: "Sân vận động Hoa Lư",
      owner: "AppsCyclone",
      status: "Upcoming",
      category: "Music",
      contactNumber: "0971757297",
      contactPerson: "HASONG MEDIS",
      description:
        "Lễ hội Songkran đã thu hút hàng triệu người trên thế giới háo hức đón chờ và quy tụ lại cùng hòa vào niềm vui của một năm mới. Lấy lễ hội này làm điểm chuẩn, dự án V-Wave mong muốn đem đến một mùa hè 2019 với những trải nghiệm mang tính toàn cầu lần đầu tiên có mặt tại Việt Nam: Crayz Water Festival 2019",
      imageURL: "/eticket/assets/media/1554191988-6C242C.jpg",
      type: "A half of day",
      start_time: "0",
      end_time: "24",
      start_date: "2019-05-25 00:00:00",
      end_date: "2019-05-26 00:00:00",
      url: null,
      created_at: {
        date: "2019-04-02 07:59:48.000000",
        timezone_type: 3,
        timezone: "UTC"
      }
    }
  ],
  validate({ params }) {
    return !isNaN(+params.id);
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(
        `https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-by-id?event_id=${+params.id}`
      );
      return { event: data.data[0] };
    } catch (e) {
      error({ message: "Không tìm thấy event", statusCode: 404 });
    }
  },
  head() {
    return {
      title: this.event.title
    };
  }
};
</script>
 
<style scoped>
body {
  background-color: white;
}
.hero-img {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 1px solid #ccc;
  height: 500px;
  z-index: -1;
}
.event__content {
  width: 1080px;
  margin: 0 auto;
  padding: 40px 50px;
  background-color: white;
  z-index: 1;
}

.event__action {
  width: 100%;
  height: 70px;
  display: flex;
  margin: 50px 0px;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.event__action__item {
  display: flex;
  flex-direction: column;
}

.event__information__item {
  display: flex;
  margin-bottom: 20px;
}

.event__information__item p {
  padding: 0;
  margin: 0;
}

.event__information__item p:first-child {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.005em;
  color: #333333;
}
.event__information__item p:last-child {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.004em;

  color: #707070;
}

/* .post-single__title {
  width: 100%;
  float: left;
  margin: 30px 30px 0px 30px;
}
.post-single__title h1 {
  font-size: 32px;
}
.post-single__content {
  width: 100%;
  float: left;
  margin: 0 30px 30px 30px;
  line-height: 22px;
} */
</style>