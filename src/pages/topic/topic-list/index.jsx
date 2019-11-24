import React from 'react';
import { Row, Col, Card, Avatar, Icon, Button, Divider } from 'antd';
import Link from 'umi/link';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';
import HotTopic from '@/pages/topic/topic-list/components/HotTopic';

@connect(({ topicList }) => ({
  topicList,
}))
class TopicList extends React.Component {

  render() {
    const { topicDetail } = this.props;
    return (
      <PageHeaderWrapper title={false}>
        <GridContent>
          <React.Fragment>
            <Row
              gutter={12}
              type="flex"
              style={{
                marginTop: 0,
              }}
            >
              <Col xl={18} lg={18} md={18} sm={18} xs={18}>
                <Card
                  className={styles.topicListContainer}
                  style={{
                    width: '100%',
                    minHeight: '720px',
                  }}
                  hoverable
                >
                  <div className={styles.breadcrumb}>
                    <span><Link to="/topic/">话题广场</Link></span>
                    <span style={{ color: '#1890FF' }}>&gt;</span>
                    <span><Link to="/topic/">二手交易</Link></span>
                  </div>

                  <HotTopic />
                </Card>
              </Col>
            </Row>
          </React.Fragment>
        </GridContent>
      </PageHeaderWrapper>
    );
  }
}
export default TopicList;
