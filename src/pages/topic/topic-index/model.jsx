import { fakeChartData, fetchHotTopicList, fetchTopHotUser, fetchTopicStatics } from './service';

const initState = {
  visitData: [],
  visitData2: [],
  salesData: [],
  searchData: [],
  offlineData: [],
  offlineChartData: [],
  salesTypeData: [],
  salesTypeDataOnline: [],
  salesTypeDataOffline: [],
  radarData: [],
  hotTopicList: [],
  topicStatics: {},
  topHotUser: [],
};
const Model = {
  namespace: 'dashboardAndanalysis',
  state: initState,
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchSalesData(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: {
          salesData: response.salesData,
        },
      });
    },

    *fetchTopHotTopicList(_, { call, put }) {
      const response = yield call(fetchHotTopicList);
      yield put({
        type: 'save',
        payload: {
          hotTopicList: response.data,
        },
      });
    },

    *fetchTopicStatics(_, { call, put }) {
      const response = yield call(fetchTopicStatics);
      yield put({
        type: 'save',
        payload: {
          topicStatics: response.data,
        },
      });
    },

    *fetchTopHotUser(_, { call, put }) {
      const response = yield call(fetchTopHotUser);
      yield put({
        type: 'save',
        payload: {
          topHotUser: response.data,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },

    clear() {
      return initState;
    },
  },
};
export default Model;
