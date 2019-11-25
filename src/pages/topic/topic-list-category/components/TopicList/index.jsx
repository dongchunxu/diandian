import React, { PureComponent } from 'react';
import { Tag, Icon, Avatar } from 'antd';
import Link from 'umi/link';
import styles from './index.less';


class TopicList extends PureComponent {

  render() {
    const { topicList } = this.props;
    return (
      <div>
        <ul style={{ padding: 0 }}>
          {
            topicList.map(topic => (
                <Link to={`/topic/${topic.id}`}>
                  <li style={{ padding: '20px 0', borderBottom: '1px dashed #eee' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                      <Avatar shape="circle" size={26} src="http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg" />
                      <span style={{ marginLeft: '10px' }}>{topic.authorName}</span>
                      <span style={{ float: 'right' }}>最近一条回帖：{Math.floor(Math.random() * 10)} 分钟前</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                      <span>{topic.title}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#AAA' }}>
                      <span style={{ paddingRight: '10px' }}> {topic.followCnt} 点赞 </span>
                      <span style={{ paddingRight: '10px' }}> {topic.replyCnt} 回复 </span>
                      <span style={{ paddingRight: '10px' }}> {topic.viewCnt} 浏览 </span>
                    </div>
                  </li>
                </Link>))
          }
          <li style={{ fontSize: '12px', color: '#AAA', textAlign: 'center' }}>热门只有15条，已经到底了哦~</li>
        </ul>
      </div>
    );
  }
}

export default TopicList;
