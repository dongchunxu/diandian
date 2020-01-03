import React, { PureComponent } from 'react';
import { Tag, Icon, Avatar } from 'antd';
import Link from 'umi/link';
import styles from './index.less';
import { getHumanTime } from '@/utils/utils';


class HotTopic extends PureComponent {

  render() {
    const { hotTopicList } = this.props;
    return (
      <div>
        <ul style={{padding: 0}}>
          {
            hotTopicList.map(topic => {
              return (<Link to={`/topic/${topic.id}`}> <li style={{ padding: '20px 0', borderBottom: '1px dashed #eee' }}>
                  <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.65)', marginBottom: '6px' }}>
                    <Avatar shape="square" size={26} src={topic.avatar} />
                    <span style={{ marginLeft: '10px' }}>{topic.authorName}</span>
                    {
                      topic.lastReplyTime ?
                        <span style={{ float: 'right' ,  fontSize: '12px', color: 'rgba(0,0,0,0.4)'}}>最近一条回帖：{getHumanTime(topic.lastReplyTime)}</span>
                        : <span></span>
                    }
                  </div>
                  <div className={styles.title}>
                    <span><a>{topic.title}</a></span>
                  </div>
                <div className={styles.status}>
                  <div className={styles.toolLike}>
                    <Icon type="like" theme="twoTone" twoToneColor="#118BFB" />
                    <span className={styles.likeCount}>{topic.followCnt} </span>
                  </div>
                  <span style={{ paddingRight: '15px' }}> <a> <Icon type="message" /> 评论 ({topic.replyCnt})</a> </span>
                  <span style={{ paddingRight: '15px' }}> <a><Icon type="eye" /> 浏览({topic.viewCnt})</a> </span>
                  <span style={{ paddingRight: '15px' }}> <a><Icon type="plus" /> 加入收藏</a> </span>
                </div>
              </li></Link>);
            })
          }
          <li style={{ fontSize: '12px', color: '#AAA', textAlign: 'center' }}>热门只有15条，已经到底了哦~</li>
        </ul>
      </div>
    );
  }
}

export default HotTopic;
