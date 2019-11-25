import React from 'react';
import { Row, Col, Card, Avatar, Icon, Button, Divider } from 'antd';
import Link from 'umi/link';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';
import TopicList from '@/pages/topic/topic-list-category/components/TopicList';

@connect(({ topicListIndex }) => ({
  topicListIndex,
}))
class TopicListIndex extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      pageNo: 1,
      pageSize: 10,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { match: { params: { id: categoryId }}} = this.props;
    const { pageNo, pageSize } = this.state;
    dispatch({
      type: 'topicListIndex/fetch',
      payload: {
        pageNo,
        pageSize,
        categoryId: parseInt(categoryId, 10),
      },
    })
  }

  render() {
    const { topicListIndex } = this.props;
    const { topicList } = topicListIndex;
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

                  <TopicList topicList={topicList} />
                </Card>
              </Col>
            </Row>
          </React.Fragment>
        </GridContent>
      </PageHeaderWrapper>
    );
  }
}
export default TopicListIndex;
