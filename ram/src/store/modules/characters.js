import api from "../../api";
const state = {
  characters: [],
  pages: 0,
  count: 0,
};
const getters = {
  getCharacters(state) {
    return state.characters;
  },
  getPages(state) {
    return state.pages;
  },
  getCount(state) {
    return state.count;
  }
  // getCharacterByID
  // getFilteredCharacters
};
const mutations = {
  SET_CHARACTERS(state, payload) {
    // console.log('SET_CHARACTERS',payload)
    state.characters = payload;
  },
  SET_PAGE(state, payload){
    state.page = payload
  },
  SET_DATA(state, payload){
    console.log('SET DATA', payload)
    state[payload.name] = payload.value
    console.log('state', state[payload.name]) 
  }

};
const actions = {
  getCharacters({ commit }) {
    api.getCharacters().then((resp) => {
      console.log("resp", resp);
      commit("SET_CHARACTERS", resp.data.results);
      console.log("action", resp.data.info.count)
      commit("SET_DATA",{name:'count', value: resp.data.info.count})
      commit("SET_DATA",{name:'pages', value: resp.data.info.pages})

    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};