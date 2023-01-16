export const state = () => ({
  selectedPackage: null,
  images: [],
  totalPrice: 0,
});

export const mutations = {
  SET_PACKAGE(state, payload) {
    state.selectedPackage = { ...payload };
  },
  CLEAR_PACKAGE(state) {
    state.selectedPackage = null;
  },
  SET_IMAGES(state, payload) {
    state.images = [...payload];
  },
  SET_TOTALPRICE(state, payload) {
    state.totalPrice = payload;
  },
};

export const actions = {
  SetPackage({ commit }, payload) {
    commit("SET_PACKAGE", payload);
  },
  ClearPackage({ commit }) {
    commit("CLEAR_PACKAGE");
    commit("SET_TOTALPRICE", 0);
  },
  SetImages({ commit }, payload) {
    commit("SET_IMAGES", payload);
    const total = payload.length * 100;
    commit("SET_TOTALPRICE", total);
  },
};

export const getters = {
  selectedPackage(state) {
    return state.selectedPackage;
  },

  maxImgsUpload(state) {
    return state.selectedPackage?.count;
  },
  getImages(state) {
    return state.images;
  },
  getTotalPrice(state) {
    return state.totalPrice;
  },
};
