import React from 'react';
import { Row, Col, Card, Avatar, Icon } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from '@/pages/topic/topic-detail/style.less';

@connect(({ topicDetail }) => ({
  topicDetail,
}))
class TopicDetail extends React.Component {

  componentDidMount() {
    const { computedMatch: { params: { id } }, dispatch } = this.props;
    console.info('id: ', id);
    dispatch({
      type: 'topicDetail/fetch',
      payload: {
        id,
      },
    })
  }

  render() {
    const { topicDetail } = this.props;
    console.info("render: ", topicDetail);
    return (
      <PageHeaderWrapper title={false}>
        <GridContent>
          <React.Fragment>
            <Row
              gutter={24}
              type="flex"
              style={{
                marginTop: 0,
              }}
            >
              <Col styleName={styles.topicDetail} xl={16} lg={24} md={24} sm={24} xs={24}>
                <Card
                  style={{ width: '100%', minHeight: '720px' }}
                  hoverable
                >
                  <div className={styles.topicInfo}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                      <Avatar shape="circle" size={26} src={topicDetail.avatar} />
                      <span className={styles.author} >{topicDetail.author}</span>
                      <span className={styles.addTime} >{topicDetail.addTime}</span>
                    </div>
                    <div className={styles.title}>{topicDetail.title}</div>
                    <div className={styles.content}>{topicDetail.content}</div>
                    <div className={styles.status}>
                      <div className={styles.toolLike}>
                        <Icon type="like" theme="twoTone" twoToneColor="#118BFB" />
                        <span className={styles.likeCount}>2</span>
                      </div>
                      <span><Icon type="edit"/> 回帖</span>·
                      <span>8条回复</span>·
                      <span>417次浏览</span>
                    </div>
                  </div>

                </Card>
              </Col>
            </Row>
          </React.Fragment>
        </GridContent>
      </PageHeaderWrapper>
    );
  }

}

export default TopicDetail;
