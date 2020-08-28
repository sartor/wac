import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['events', 'members'],
      // fetchBeforeUse: true,
      // arrayMerger (store, saved) {
      //   console.log('smt', saved)
      //   return saved
      // },
}),
  ],
  state: {
    drawer: null,
    members: [],
    events: [
      {
        name: 'Kebab party',
        description: 'Make some bbq outside',
        startAt: '2020-08-31',
        endAt: '2020-09-10',
        currency: 'UAH',
        sum: 100,
        members: [
          {
            name: 'Glutton',
            contributed: true,
          },
          {
            name: 'Vegan',
            contributed: false,
          },
        ],
      },
      {
        name: 'Topping collection',
        startAt: '2020-09-10',
        endAt: '2020-09-15',
        currency: 'USD',
        sum: 5,
        members: [
          {
            name: 'Vegan',
            contributed: true,
          },
          {
            name: 'Sweetie',
            contributed: true,
          },
        ],
      },
    ],
  },

  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    ADD_MEMBER: (state, payload) => {
    },
  },

  actions: {

  },
})
