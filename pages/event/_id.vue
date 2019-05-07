<template>
  <v-content>
    <v-container
      grid-list-sm
      :style="{backgroundImage: 'url(https://eticket-vhu.herokuapp.com' + event.imageURL +')'}"
      class="hero-img"
      fluid
    ></v-container>
    <div class="mb-5 header" style="background-color:white;">
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
          <v-card class="mb-5 elevation-1">
            <v-card-title class="headline">About</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <span v-html="event.description"></span>
            </v-card-text>
          </v-card>
          <!-- Price -->

          <v-card class="mb-5 elevation-1">
            <v-card-title class="headline">Event Price</v-card-title>
            <v-divider></v-divider>

            <v-expansion-panel>
              <v-expansion-panel-content v-for="ticket in tickets" :key="ticket.id">
                <template v-slot:header>
                  <div>{{ticket.name}}</div>
                  <div style="text-align: right; font-weight: bold">${{ticket.price}}</div>
                </template>
                <v-card>
                  <v-card-text>{{ticket.description}}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
          <!-- Contact -->
          <v-card class="mb-5 elevation-1">
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
          <pre>{{checkLiked}}</pre>
        </v-flex>
        <v-flex lg4 hidden-md-and-down class="ml-3">
          <v-card class="elevation-1">
            <v-card-title class="headline" style="font-weight: 600">{{event.title}}</v-card-title>
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
                  <p>From ${{event.tickettype.data[0].price}}</p>
                  <p>Pay free tickets within 3 days before the event</p>
                </div>
              </div>
              <!-- Share -->
              <v-divider></v-divider>
              <v-layout class="mt-2 mb-2">
                <v-flex lg4>
                  <v-btn flat color class="event__action__item" @click="onClickLike">
                    <v-icon v-if="isLiked">favorite</v-icon>
                    <v-icon v-else>favorite_border</v-icon>
                    <span v-if="isLiked">Liked</span>
                    <span v-else>Like</span>
                  </v-btn>
                </v-flex>
                <v-flex lg4>
                  <div class="event__action__item" @click.stop="dialog = true">
                    <v-icon>share</v-icon>
                    <span>Share</span>
                    <v-dialog v-model="dialog" max-width="400">
                      <v-card style="padding: 20px">
                        <v-card-title class="headline">Share with friend</v-card-title>
                        <v-text-field
                          solo
                          :value="'https://eticket-app.herokuapp.com/event/' + event.id"
                          outline
                          readonly
                          autofocus
                          flat
                          append-icon="file_copy"
                        ></v-text-field>
                        <v-card-text>
                          <!-- <v-btn fab dark color="indigo">
                            <v-icon dark>add</v-icon>
                          </v-btn>-->
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
              <v-divider></v-divider>
            </v-card-text>
            <!-- Button Mua Ve -->

            <v-card-actions>
              <!-- Chưa mua -->
              <v-dialog v-if="isBought==false" v-model="dialog_buyTicket" max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn large block color="mycolor" dark v-on="on">GET TICKET NOW</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Buy ticket</span>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        v-for="ticket in tickets"
                        :key="ticket.id"
                        :label="`${ticket.name} $${ticket.price}`"
                        :value="ticket.id"
                      ></v-radio>
                    </v-radio-group>
                    <div v-if="messages==='Successfully'" style="color: #4CAF50">{{messages}}</div>
                    <div v-else class="dialog-message" style="color: #FF5252">{{messages}}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="blue darken-1" flat @click="dialog_buyTicket = false">Close</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn dark color="mycolor darken-1" @click="onBuyTicket">Pay Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!-- Đã mua -->
              <v-dialog v-else v-model="dialog_viewTicket" max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn large block color="success" dark v-on="on">VIEW YOUR TICKET</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{checkTicket.title}}</span>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <VueQRCodeComponent :text="checkTicket.qr_code"/>
                    <div class="event__information__item">
                      <v-icon left>calendar_today</v-icon>
                      <div>
                        <p>{{checkTicket.start_date}}</p>
                        <p>{{checkTicket.start_time}}:00 - {{checkTicket.end_time}}:00</p>
                      </div>
                    </div>
                    <div class="event__information__item">
                      <v-icon left>location_city</v-icon>
                      <div>
                        <p>{{checkTicket.locationName }}</p>
                        <p>{{checkTicket.address}}</p>
                      </div>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn dark color="error darken-1" @click="onBuyTicket">Ticket refund</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog_viewTicket=false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
 
<script>
import axios from "axios";
import VueQRCodeComponent from "vue-qrcode-component";

export default {
  components: {
    VueQRCodeComponent
  },
  data() {
    return {
      isLiked: "",
      isBought: "",
      dialog: false,
      dialog_buyTicket: false,
      dialog_viewTicket: false,
      messages: "",
      radioGroup: ""
    };
  },
  validate({ params }) {
    return !isNaN(+params.id);
  },
  async asyncData({ params, query, error, store }) {
    if (store.state.infoUser == null) {
      let [resEventDetail, resEventTicket, resEventFollow] = await Promise.all([
        axios.get(
          `https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-by-id?event_id=${+params.id}`
        )
      ]);
      return {
        event: resEventDetail.data.data[0],
        tickets: resEventDetail.data.data[0].tickettype.data
      };
    } else {
      let [resEventDetail, resEventTicket, resEventFollow] = await Promise.all([
        axios.get(
          `https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-by-id?event_id=${+params.id}`
        ),
        axios.get(
          "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-my-ticket?limit=10&page=1",
          {
            headers: {
              Authorization: store.state.infoUser.access_token
            }
          }
        ),
        axios.get(
          "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-of-client-follow?limit=10&page=1",
          {
            headers: {
              Authorization: store.state.infoUser.access_token
            }
          }
        )
      ]);
      return {
        event: resEventDetail.data.data[0],
        tickets: resEventDetail.data.data[0].tickettype.data,
        eventTickets: resEventTicket.data.data,
        eventFollowes: resEventFollow.data.data
      };
    }
  },
  computed: {
    checkTicket() {
      return this.eventTickets.find(
        eventTicket => eventTicket["id_event"] === this.event.id
      );
    },
    checkLiked() {
      let checked = this.eventFollowes.find(
        eventFollow => eventFollow["id"] === this.event.id
      );
      if (checked != null) {
        this.isLiked = true;
        return checked;
      }
    }
  },
  head() {
    return {
      title: this.event.title
    };
  },
  methods: {
    onBuyTicket() {
      let idEvent = this.event.id;
      let idTypeTicket = this.radioGroup;
      let token = this.$store.state.infoUser.access_token;
      console.log("idEvent: " + idEvent);
      console.log("idTypeTicket: " + idEvent);
      console.log("token: " + token);
      if (idEvent && idTypeTicket) {
        axios
          .post(
            "https://eticket-vhu.herokuapp.com/api/v1/eticket/buy-ticket",
            {
              event_id: idEvent,
              type_id: idTypeTicket
            },
            {
              headers: {
                Authorization: token
              }
            }
          )
          .then(response => {
            console.log(response.data);
            // setTimeout(() => {
            //   this.dialog = false;
            //   this.error = "";
            // }, 2000);
          })
          .catch(e => {
            console.log(e.data);
          });
      }

      // console.log(this.radioGroup);
    },
    onClickLike() {
      let token = this.$store.state.infoUser.access_token;
      console.log(token);
      if (this.isLiked == true) {
        axios
          .post(
            "https://eticket-vhu.herokuapp.com/api/v1/eticket/un-follow-event",
            {
              event_id: this.event.id
            },
            {
              headers: {
                Authorization: token
              }
            }
          )
          .then(response => {
            this.isLiked = false;
            console.log("unlike");
          });
      } else {
        axios
          .post(
            "https://eticket-vhu.herokuapp.com/api/v1/eticket/follow-event",
            {
              event_id: this.event.id
            },
            {
              headers: {
                Authorization: token
              }
            }
          )
          .then(response => {
            this.isLiked = true;
            console.log("liked");
          });
      }
    }
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
  height: 60vh;
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