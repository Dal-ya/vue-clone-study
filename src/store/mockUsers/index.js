import { getUsers } from '@/api/mockUsers';

export default {
  namespaced: true,
  state: {
    users: null,
    isLoading: false,
    error: null,
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
    getError(state) {
      return state.error;
    },
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_IS_LOADING(state, payload) {
      state.isLoading = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async FETCH_USERS({ commit }) {
      try {
        commit('SET_IS_LOADING', true);
        const users = await getUsers();
        // console.log('users: ', users);
        commit('SET_USERS', users);
        commit('SET_IS_LOADING', false);
      } catch (error) {
        commit('SET_ERROR', error);
      }
    },
  },
};
