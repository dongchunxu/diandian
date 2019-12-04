import request from '@/utils/request';

const host = "http://www.dianwoyin.com";
export async function fakeTopicDetail({id}) {
  return request(`${host}/api/topics/queryTopicDetail?topicId=${id}`);
}
