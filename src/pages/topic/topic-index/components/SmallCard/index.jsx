import React, { PureComponent } from 'react';
import styles from './index.less';

class SmallCard extends PureComponent {
  render() {
    const { imgUrl, title, total, today } = this.props;

    const allTopic = (
      <div className={styles.smallCardContainer}>
        <div className={styles.right}>
          <div className={styles.title}>
            { title }
          </div>
          <div className={styles.otherInfo}>
            <span>今日 (<b>{today}</b>)</span>
            <span>历史总数 ({total})</span>
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
              <span>今日 ({today})</span>
              <span>历史总数 ({total})</span>
            </div>
          </div>
        </div>) : allTopic);
  }
}

export default SmallCard;
