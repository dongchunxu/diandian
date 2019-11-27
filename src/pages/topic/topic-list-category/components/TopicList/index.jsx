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
                    <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.87)', marginBottom: '6px' }}>
                      <Avatar shape="circle" size={26} src="http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg" />
                      <span style={{ marginLeft: '10px' }}>{topic.authorName}</span>
                      <span style={{ float: 'right' }}>最近一条回帖：{Math.floor(Math.random() * 10)} 分钟前</span>
                    </div>
                    <div style={{ fontSize: '15px', color: 'rgba(0,0,0,0.87)', marginBottom: '10px' }}>
                      <span>{topic.title}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>
                      <div className={styles.toolLike}>
                        <Icon type="like" theme="twoTone" twoToneColor="#118BFB" />
                        <span className={styles.likeCount}>{Math.floor(Math.random() * 10)} </span>
                      </div>
                      <span style={{ paddingRight: '12px' }}> <Icon type="message" />   评论({topic.replyCnt})</span>
                      <span style={{ paddingRight: '12px' }}> <Icon type="eye" />  浏览({topic.viewCnt})  </span>
                      <span style={{ paddingRight: '12px' }}> <Icon type="plus" />加入收藏 </span>
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
