import { fetchTopicList } from './service';

const Model = {
  namespace: 'topicListIndex',
  state: {
    topicList: [],
  },
  effects: {
    *fetch({ payload }, { put, call }) {
      const response = yield call(fetchTopicList, payload);
      let { data: { entity: topicList }} = response;
      topicList = topicList || [];
      yield put({
        type: 'save',
        payload: topicList,
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        topicList: payload,
      };
    },
  },
};
export default Model;
