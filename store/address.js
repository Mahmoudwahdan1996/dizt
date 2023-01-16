export const state = () => ({
  address: {
    name: "",
    email: "",
    phone_number: "",
    address: "",
  },
});

export const mutations = {
  SET_ADDRESS(state, payload) {
    state.address = { ...payload };
  },
};

export const actions = {
  SetAddress({ commit }, payload) {
    commit("SET_ADDRESS", payload);
  },
};

export const getters = {
  getAddress(state) {
    return state.address;
  },
};
