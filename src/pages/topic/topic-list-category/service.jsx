import request from '@/utils/request';

const host = 'http://www.dianwoyin.com';
export async function fetchTopicList({categoryId, pageNo, pageSize}) {
  return request(`${host}/api/topic/queryTopicList?categoryId=${categoryId}&pageNo=${pageNo}&pageSize=${pageSize}`);
}
