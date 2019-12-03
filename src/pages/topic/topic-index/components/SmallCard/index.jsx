import React, { PureComponent } from 'react';
import styles from './index.less';

class SmallCard extends PureComponent {
  render() {
    const { imgUrl, title } = this.props;

    const allTopic = (
      <div className={styles.smallCardContainer}>
        <div className={styles.right}>
          <div className={styles.title}>
            { title }
          </div>
          <div className={styles.otherInfo}>
            <span>今日 (<b>100</b>)</span>
            <span>历史总数 (2889)</span>
          </div>
        </div>
      </div>
    );

    return (
      imgUrl ? (
        <div className={styles.smallCardContainer}>
          <div className={styles.left}>
            {
              imgUrl ? <img
                alt="图片未加载"
                src={ imgUrl } /> : <span></span>
            }
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              { title }
            </div>
            <div className={styles.otherInfo}>
              <span>今日 (10)</span>
              <span>历史总数 (288)</span>
            </div>
          </div>
        </div>) : allTopic);
  }
}

export default SmallCard;
