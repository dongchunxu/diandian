import request from '@/utils/request';

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

const host = 'http://www.dianwoyin.com';
export async function fetchHotTopicList() {
  return request(`${host}/api/topics/queryTopHotTopicList`);
}

export async function fetchTopicStatics() {
  return request(`${host}/api/topics/queryTopicStatics`);
}

export async function fetchTopHotUser() {
  return request(`${host}/api/user/queryTopHotUser`);
}
