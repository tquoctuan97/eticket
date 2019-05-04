import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedEvents: [],
      upcommingEvents: [],
      freeEvents: []
    },
    mutations: {
      setEvents(state, events) {
        state.loadedEvents = events;
      },
      getUpcommingEvents(state, events) {
        state.upcommingEvents = events;
      },
      getFreeEvents(state, events) {
        state.freeEvents = events;
      }
    },
    actions: {
      //Lasted Event
      // nuxtServerInit(vuexContext, context) {
      //   return context.app.$axios
      //     .$get(
      //       'https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event?limit=6&page=1'
      //     )
      //     .then(data => {
      //       vuexContext.commit('setEvents', data.data);
      //     })
      //     .catch(e => context.error(e));
      // },

      //UpcommingEvent
      // nuxtServerInit(vuexContext, context) {
      //   return context.app.$axios
      //     .$get(
      //       'https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-in-week?limit=6&page=1'
      //     )
      //     .then(data => {
      //       vuexContext.commit('getUpcommingEvents', data.data);
      //     })
      //     .catch(e => context.error(e));
      // },

      //FreeEvent
      nuxtServerInit(vuexContext, context) {
        let a = context.app.$axios
          .$get(
            'https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event?limit=6&page=1'
          )
          .then(data => {
            vuexContext.commit('setEvents', data.data);
          })
          .catch(e => context.error(e));

        let b = context.app.$axios
          .$get(
            'https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-free?limit=6&page=1'
          )
          .then(data => {
            vuexContext.commit('getFreeEvents', data.data);
          })
          .catch(e => context.error(e));

        let c = context.app.$axios
          .$get(
            'https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-in-week?limit=6&page=1'
          )
          .then(data => {
            vuexContext.commit('getUpcommingEvents', data.data);
          })
          .catch(e => context.error(e));

        return;
      },
      setEvents(vuexContext, events) {
        vuexContext.commit('setEvents', events);
      },
      getUpcommingEvents(vuexContext, events) {
        vuexContext.commit('getUpcommingEvents', events);
      },
      getFreeEvents(vuexContext, events) {
        vuexContext.commit('getFreeEvents', events);
      }
    },
    getters: {
      loadedEvents(state) {
        return state.loadedEvents;
      },
      upcommingEvents(state) {
        return state.upcommingEvents;
      },
      freeEvents(state) {
        return state.freeEvents;
      }
    }
  });
};

export default createStore;
