import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedCategories: []
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
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get(
            'https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event?limit=6&page=1'
          )
          .then(data => {
            vuexContext.commit('setEvents', data.data);
          })
          .catch(e => context.error(e));
      },
      setEvents(vuexContext, events) {
        vuexContext.commit('setEvents', events);
      }
    },
    getters: {
      loadedCategories(state) {
        return state.loadedCategories;
      }
    }
  });
};

export default createStore;
