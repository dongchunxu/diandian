import React from 'react';
import { Row, Col, Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from '@/pages/topic/topic-list/style.less';

@connect(({ topicDetail }) => ({
  topicDetail,
}))
class TopicDetail extends React.Component {

  render() {
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
              <Col xl={16} lg={24} md={24} sm={24} xs={24}>
                <Card
                  className={styles.myFollow}
                  style={{ width: '100%', minHeight: '720px' }}
                  title="我关注的主题（帖子）"
                  hoverable
                >
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
