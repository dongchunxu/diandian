import { fakeTopicDetail } from '@/pages/topic/topic-detail/service';

const initState = {
  detail: {},
};
const Model = {
  namespace: 'topicDetail',
  state: initState,
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fakeTopicDetail, payload);
      const { data } = response;
      yield put({
        type: 'init',
        payload: {
          detail: data,
        },
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
