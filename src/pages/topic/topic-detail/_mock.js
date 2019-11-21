
const getFakeTopicDetail = {
  title: '今天桌子上莫其妙的收到一个皇冠曲奇，求问是谁放的？',
  content: 'RT....不知道为什么每天推送那么多条MLINK，写着5秒，亲测看完题目+所有选项都不止5秒～关键是，真的很烦，每天那么多推送主要要做什么呢？',
  author: '山中无老虎',
  avatar: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
  addTime: '19分钟前',
  reply: [
    {
      content: '不知道哎，或许是谁放错了呢。',
    },
  ],
};

export default {
  'GET  /api/topic/:id': getFakeTopicDetail,
};
