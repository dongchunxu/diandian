import React, { PureComponent } from 'react';
import { Tag, Icon, Avatar } from 'antd';
import styles from './index.less';


class TopicSummary extends PureComponent {

  render() {
    const { title, authorName, authorId } = this.props;
    const mockData = [
      "怎么做好社区的运营，如何提升MVP",
      "这是一条用于测试的帖子，看看长度是否合适231312",
      "这是一条用于测试的帖子，看看长度是否合适2133213",
      "这是一条用于测试的帖子，看看长度是否合适21313",
      "98k这是一种怎么样的？？",
      "这是一条用于测试的帖子，看看长度",
      "有适合u淮安的印刷机，二手九成新的多少钱呢",
      "这是一条用于测试的帖子，看看长度是否合适21313",
      "这是一条用于测试的帖子，看看长度是否合适21313",
      "在一个比较文明的社区",
      "都是在输出价值观，却从来没有人输入",
      "一个小众的社区，如何做好运营",
      "新公司创立初期如何去做商户推广？",
      "新出的apple做设计怎么样？",
      "这是一个什么样的社区？如何拉新，留存？",
    ];
    return (
      <div>
        <table className={styles.topicSummaryContainer}>
          <tbody>
          {
            mockData.map(d => {
              return (<tr>
                <td>
                  <Avatar shape="circle" size={18} src="http://b.hiphotos.baidu.com/image/pic/item/32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg" />
                  <span style={{ marginLeft: '5px' }}>{d}</span>
                </td>
                <td>
                  <span style={{ color: 'rgba(0,0,0,.38)', fontSize: '12px', float: 'right' }}></span>
                </td>
              </tr>);
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopicSummary;
