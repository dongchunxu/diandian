import { Avatar, Badge, Card, Col, Empty, Icon, Row, Spin } from 'antd';
import React, { Component } from 'react';
import { GridContent, PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';
import HotTopic from '@/pages/topic/topic-index/components/HotTopic';
import JoinUs from '../../../assets/wechat_banner.png';

import TopicForm from '@/pages/topic/topic-index/components/TopicForm';
import CategoryPanel from '@/pages/topic/topic-index/components/CategoryPanel'; // const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));

@connect(({ dashboardAndanalysis, loading }) => ({
  dashboardAndanalysis,
  loading: loading.effects['dashboardAndanalysis/fetchTopHotTopicList'],
}))
class TopicIndex extends Component {
  state = {
    key: 'tab1',
  };

  reqRef = 0;

  timeoutId = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'dashboardAndanalysis/fetch',
      });
    });

    dispatch({
      type: 'dashboardAndanalysis/fetchTopHotTopicList',
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchTopicStatics',
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchTopHotUser',
    })
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndanalysis/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  onTabChange = (key, type) => {
    this.setState({
      [type]: key,
    });
  };

  bindRefModal = ref => {
    this.child = ref;
  };

  openAddTopicModal = () => {
    this.child.show();
  };

  render() {
    const { dashboardAndanalysis, loading } = this.props;
    console.info("hotTopicList: ", dashboardAndanalysis.hotTopicList);
    console.info("topicStatics: ", dashboardAndanalysis.topicStatics);


    const tabList = [
      {
        key: 'tab1',
        tab: '版块',
      },
      {
        key: 'tab2',
        tab: '关注话题',
      },
      {
        key: 'tab2',
        tab: '关注用户',
      },
    ];
    const contentList = {
      tab1: (
        <CategoryPanel statics={dashboardAndanalysis.topicStatics}/>
      ),
      tab2: (
        <Empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          imageStyle={{
            height: 60,
          }}
          description={<span>暂无数据~</span>}
        ></Empty>
      ),
    };

    return (
      <Spin spinning={loading}>
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
                  style={{
                    width: '100%',
                  }}
                  title="版块 / 我关注的"
                  activeTabKey={this.state.key}
                  tabList={tabList}
                  onTabChange={key => {
                    this.onTabChange(key, 'key');
                  }}
                  hoverable
                >
                  {contentList[this.state.key]}
                </Card>

                <Card
                  className={styles.myHotTopic}
                  style={{
                    width: '100%',
                  }}
                  title="热门话题"
                >
                  <HotTopic hotTopicList={dashboardAndanalysis.hotTopicList} title="理性讨论这个问题" authorName="董春旭" />
                </Card>
              </Col>
              <Col xl={7} lg={24} md={24} sm={24} xs={24}>
                <Card
                  className={styles.introduce}
                  style={{
                    width: '100%',
                  }}
                  title="介绍"
                  hoverable
                >
                  <div
                    style={{
                      minHeight: '85px',
                      position: 'relative',
                    }}
                  >
                    <p
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        display: 'inline-block',
                        verticalAlign: 'top',
                        margin: 0,
                      }}
                    >
                      <span
                        className="ct-image"
                        style={{
                          width: '95px',
                        }}
                      >
                        <img
                          alt="图片加载失败"
                          width="95"
                          src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:c06c7479/%E6%AC%A2%E8%BF%8E%E5%8D%A1%E7%89%87%E6%8F%92%E5%9B%BE.png"
                        />
                      </span>
                    </p>
                    <div
                      style={{
                        display: 'inline-block',
                        marginLeft: '115px',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '18px',
                        }}
                      >
                        欢迎加入社区
                      </h3>
                      <p>
                        <span>从哪里开始？</span>
                        <span
                          style={{
                            display: 'inline-block',
                          }}
                        >
                          查看 <a>新人社区指南</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </Card>
                <Card
                  className={styles.myRecommend}
                  style={{
                    width: '100%',
                    minHeight: '220px',
                  }}
                  title="感兴趣的用户"
                  hoverable
                >
                  {
                    dashboardAndanalysis.topHotUser.map(x => {
                      return (<div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                        <Avatar shape="square" size={32} src={x.avatar} />
                    </span>
                        <span>
                      <span style={{verticalAlign: 'top' }}>{x.name}</span>
                      <span>{x.orgName}</span>
                      <span className={styles.follow}><Icon type="plus"/>关注</span>
                      <div>
                        <span className={styles.status}>{x.followCnt}关注</span>
                        <span className={styles.status}>{x.likeCnt}点赞</span>
                      </div>
                    </span>
                      </div>)
                    })
                  }
                </Card>
                <Card
                  bodyStyle={{ padding: '2px' }}
                >
                  <img style={{width: '100%', height: '100%'}} src={JoinUs} alt="joinUs"/>
                </Card>
                <div>
                  <span
                    style={{
                      marginLeft: '5px',
                      color: 'rgba(0, 0, 0, 0.38)',
                    }}
                  >
                    <Badge status="success" />
                    2121 在线
                  </span>
                  <span
                    style={{
                      marginLeft: '10px',
                      color: 'rgba(0, 0, 0, 0.38)',
                    }}
                  >
                    注册会员 18000
                  </span>
                </div>
                <TopicForm onRef={this.bindRefModal} />
              </Col>
            </Row>
          </React.Fragment>
        </GridContent>
      </PageHeaderWrapper>
    </Spin>
    );
  }
}

export default TopicIndex;
