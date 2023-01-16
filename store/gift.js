export const state = () => ({
  name: "",
  email: "",
});

export const mutations = {
  SET_NAME(state, payload) {
    state.name = payload;
  },
  SET_Email(state, payload) {
    state.email = payload;
  },
};

export const actions = {
  SetName({ commit }, payload) {
    commit("SET_NAME", payload);
  },
  SetEmail({ commit }, payload) {
    commit("SET_Email", payload);
  },
};

export const getters = {
  name(state) {
    return state.name;
  },

  email(state) {
    return state.email;
  },
};
