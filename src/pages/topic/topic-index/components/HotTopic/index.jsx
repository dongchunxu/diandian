import React, { PureComponent } from 'react';
import { Tag, Icon, Avatar } from 'antd';
import Link from 'umi/link';
import styles from './index.less';


class HotTopic extends PureComponent {

  render() {
    const { title, authorName, authorId } = this.props;
    const mockData = [
      "怎么做好社区的运营，如何提升MVP",
      "这是一条用于测试的帖子，看看长度是否合适231312",
      "这是一条用于测试的帖子，看看长度",
      "有适合u淮安的印刷机，二手九成新的多少钱呢",
      "这是一条用于测试的帖子，看看长度是否合适21313",
      "在一个比较文明的社区",
      "都是在输出价值观，却从来没有人输入",
      "一个小众的社区，如何做好运营",
      "新公司创立初期如何去做商户推广？",
      "这是一个什么样的社区？如何拉新，留存？",
    ];
    return (
      <div>
        <ul style={{padding: 0}}>
          {
            mockData.map(d => {
              return (<Link to="/topic/12313"> <li style={{ padding: '20px 0', borderBottom: '1px dashed #eee' }}>
                  <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.87)', marginBottom: '6px' }}>
                    <Avatar shape="square" size={26} src="http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg" />
                    <span style={{ marginLeft: '10px' }}>董某某{Math.floor(Math.random() * 10000000)}</span>
                    <span style={{ float: 'right' ,color: 'rgba(0,0,0,0.4)'}}>最近一条回帖：{Math.floor(Math.random() * 10)} 分钟前</span>
                  </div>
                  <div style={{ fontSize: '15px', color: 'rgba(0,0,0,0.87)', marginBottom: '10px' }}>
                    <span>{d}</span>
                  </div>
                <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)', marginBottom: '10px' }}>
                  <span>{d}</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>
                  <div className={styles.toolLike}>
                    <Icon type="like" theme="twoTone" twoToneColor="#118BFB" />
                    <span className={styles.likeCount}>{Math.floor(Math.random() * 10)} </span>
                  </div>
                  <span style={{ paddingRight: '12px' }}> <Icon type="message" />  评论 ({Math.floor(Math.random() * 36)}) </span>
                  <span style={{ paddingRight: '12px' }}> <Icon type="eye" /> 浏览({Math.floor(Math.random() * 1000)}) </span>
                  <span style={{ paddingRight: '12px' }}> <Icon type="plus" />加入收藏 </span>
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
