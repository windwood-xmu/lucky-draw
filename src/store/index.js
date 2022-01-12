import Vue from 'vue';
import Vuex from 'vuex';
import {
  setData,
  resultField,
  newLotteryField,
  listField
} from '@/helper/index';

Vue.use(Vuex);

let initConfig = {
  name: '春节团拜抽奖',
  number: 300,
  superPrize: 2,
  firstPrize: 10,
  secondPrize: 40,
  thirdPrize: 80
};

let initResult = {
  superPrize: []
};

let initLottery = [
  { key: 'firstPrize', name: '一等奖' },
  { key: 'secondPrize', name: '二等奖' },
  { key: 'thirdPrize', name: '三等奖' }
];

export default new Vuex.Store({
  state: {
    config: initConfig,
    result: initResult,
    newLottery: initLottery,
    list: [],
    photos: []
  },
  mutations: {
    setClearConfig(state) {
      state.config = initConfig;
      state.newLottery = initLottery;
    },
    setClearList(state) {
      state.list = [];
    },
    setClearPhotos(state) {
      state.photos = [];
    },
    setClearResult(state) {
      state.result = initResult;
    },
    setClearStore(state) {
      this.setClearConfig(state);
      this.setClearList(state);
      this.setClearPhotos(state);
      this.setClearResult(state);
    },
    setConfig(state, config) {
      state.config = config;
    },
    setResult(state, result = {}) {
      state.result = result;

      setData(resultField, state.result);
    },
    setNewLottery(state, newLottery) {
      if (state.newLottery.find(item => item.name === newLottery.name)) {
        return;
      }
      state.newLottery.push(newLottery);
      setData(newLotteryField, state.newLottery);
    },
    setList(state, list) {
      const arr = state.list;
      list.forEach(item => {
        const arrIndex = arr.findIndex(data => data.key === item.key);
        if (arrIndex > -1) {
          arr[arrIndex].name = item.name;
        } else {
          arr.push(item);
        }
      });
      state.list = arr;

      setData(listField, arr);
    },
    setPhotos(state, photos) {
      state.photos = photos;
    }
  },
  actions: {},
  modules: {}
});
