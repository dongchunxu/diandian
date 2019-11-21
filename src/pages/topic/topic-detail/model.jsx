import { fakeTopicDetail } from '@/pages/topic/topic-detail/service';

const Model = {
  namespace: 'topicDetail',
  state: [],
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fakeTopicDetail, payload);
      yield put({
        type: 'init',
        payload: response,
      });
    },
  },
  reducers: {
    init(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default Model;
