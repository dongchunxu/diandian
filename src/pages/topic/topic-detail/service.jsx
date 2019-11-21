import request from '@/utils/request';

export async function fakeTopicDetail({id}) {
  return request(`/api/topic/${id}`);
}
