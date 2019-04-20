<template>
  <v-content>
    <v-container
      grid-list-sm
      :style="{backgroundImage: 'url(https://eticket-vhu.herokuapp.com' + event.imageURL +')'}"
      class="hero-img"
      fluid
    ></v-container>
    <div
      class="mb-5"
      style="background-color:white;   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);"
    >
      <v-container>
        <v-layout wrap>
          <v-flex xs12 lg8>
            <h1 class="display-2 font-weight-medium">{{ event.title }}</h1>
            <p class="subheading">By {{event.owner }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container grid-list-lg>
      <v-layout>
        <v-flex lg8>
          <!-- About -->
          <v-card class="mb-5">
            <v-card-title class="headline">About</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <span v-html="event.description"></span>
            </v-card-text>
          </v-card>
          <!-- Price -->
          <v-card class="mb-5">
            <v-card-title class="headline">Event Price</v-card-title>
            <v-divider></v-divider>

            <v-expansion-panel>
              <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                <template v-slot:header>
                  <div>Common Ticket</div>
                  <div style="text-align: right; font-weight: bold">$400</div>
                </template>
                <v-card>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
          <!-- Contact -->
          <v-card class="mb-5">
            <v-card-title class="headline">Contact</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>
                <span>{{event.contactPerson}}</span>
              </p>
              <v-btn flat :href="'tel:'+event.contactNumber">
                <v-icon left>phone</v-icon>
                <span>{{event.contactNumber}}</span>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex hidden-md-and-down class="ml-3">
          <v-card>
            <v-card-title style="font-weight: 600">{{event.title}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
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
                  <p>{{event.address}}</p>
                </div>
              </div>
              <div class="event__information__item">
                <v-icon left>shopping_cart</v-icon>
                <div>
                  <p>$14 - $20</p>
                  <p>Pay free tickets within 3 days before the event</p>
                </div>
              </div>
            </v-card-text>
          </v-card>
          <v-layout class="border">
            <v-flex lg4>
              <v-btn flat color class="event__action__item" @click="onClickLike">
                <v-icon v-if="isLike">favorite</v-icon>
                <v-icon v-else>favorite_border</v-icon>
                <span v-if="isLike">Liked</span>
                <span v-else>Like</span>
              </v-btn>
            </v-flex>
            <v-flex lg4>
              <div class="event__action__item" @click.stop="dialog = true">
                <v-icon>share</v-icon>
                <span>Share</span>
                <v-dialog v-model="dialog" max-width="400">
                  <v-card style="padding: 20px">
                    <v-card-title class="headline">Share with freind</v-card-title>
                    <v-text-field
                      solo
                      :value="'http://localhost:3000/event/' + event.id"
                      outline
                      readonly
                      autofocus
                      flat
                      append-icon="file_copy"
                    ></v-text-field>
                    <v-card-text>
                      <v-btn fab dark color="indigo">
                        <v-icon dark>add</v-icon>
                      </v-btn>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-flex>
            <v-flex lg4>
              <div class="event__action__item">
                <a
                  target="_blank"
                  :href="'https://www.google.com/maps/search/?api=1&query='+event.address"
                >
                  <v-icon>directions</v-icon>
                </a>
                <span>Directions</span>
              </div>
            </v-flex>
            <v-flex lg4>
              <div class="event__action__item">
                <v-icon>more_horiz</v-icon>
                <span>More</span>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
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
  data() {
    return {
      isLike: false,
      dialog: false
    };
  },
  methods: {
    onClickLike() {
      return (this.isLike = !this.isLike);
    }
  },
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
  width: 50vw;
  min-width: 360px;
  margin: 0 auto;
  padding: 40px 50px;
  z-index: 1;
}
.border {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
}
.event__action {
  height: 70px;
  display: flex;
  margin: 50px 0px;
  justify-content: space-around;
  align-items: center;
}

.event__action__item {
  display: flex;
  width: calc(25%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
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