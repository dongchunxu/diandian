import { Card, Col, Dropdown, Empty, Icon, Menu, Row, Badge, Avatar, Spin } from 'antd';
import React, { Component } from 'react';
import { GridContent, PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import Link from 'umi/link';
import styles from './style.less';
import SmallCard from '@/pages/topic/topic-index/components/SmallCard';
import HotTopic from '@/pages/topic/topic-index/components/HotTopic';
import JoinUs from '../../../assets/wechat_banner.png';
import Job from '../../../assets/undraw_multitasking_hqg3.svg';
import ChatGroup from '../../../assets/undraw_chatting_2yvo.svg';
import TradeIn from '../../../assets/undraw_make_it_rain_iwk4.svg';
import Price from '../../../assets/undraw_printing_invoices_5r4r.svg';
import Conversation from '../../../assets/undraw_word_of_mouth_v1j9.svg';
import Advise from '../../../assets/undraw_wall_post_83ul.svg';
import Deal from '../../../assets/undraw_business_deal_cpi9.svg';

import TopicForm from '@/pages/topic/topic-index/components/TopicForm'; // const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));

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
    const tabList = [
      {
        key: 'tab1',
        tab: '版块',
      },
      {
        key: 'tab2',
        tab: '我关注的话题',
      },
    ];
    const contentList = {
      tab1: (
        <React.Fragment>
          <Row gutter={24}>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Link to="/topic/category/1/list">
                <SmallCard
                  title="行业交流"
                  imgUrl={ChatGroup}
                  style={{
                    width: 250,
                    marginTop: 16,
                  }}
                />
              </Link>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Link to="/topic/category/2/list">
                <SmallCard
                  title="二手交易"
                  imgUrl={TradeIn}
                  style={{
                    width: 250,
                    marginTop: 16,
                  }}
                />
              </Link>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Link to="/topic/category/3/list">
                <SmallCard
                  title="求职招聘"
                  imgUrl={Job}
                  style={{
                    width: 250,
                    marginTop: 16,
                  }}
                />
              </Link>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Link to="/topic/category/4/list">
                <SmallCard
                  title="报价相关"
                  imgUrl={Price}
                  style={{
                    width: 250,
                    marginTop: 16,
                  }}
                />
              </Link>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <SmallCard
                title="吐槽八卦"
                imgUrl={Conversation}
                style={{
                  width: 250,
                  marginTop: 16,
                }}
              />
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <SmallCard
                title="意见与建议"
                imgUrl={Advise}
                style={{
                  width: 250,
                  marginTop: 16,
                }}
              />
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <SmallCard
                title="推广"
                imgUrl={Deal}
                style={{
                  width: 250,
                  marginTop: 16,
                }}
              />
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <SmallCard
                title="全部"
                style={{
                  width: 250,
                  marginTop: 16,
                }}
              />
            </Col>
          </Row>
        </React.Fragment>
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
                  <div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                        <Avatar shape="square" size={32} src="http://img1.imgtn.bdimg.com/it/u=1340042389,756827382&fm=26&gp=0.jpg" />
                    </span>
                    <span>
                      <span style={{verticalAlign: 'top' }}>猪八戒</span>
                      <span>华东彩印</span>
                      <div>
                        <span className={styles.status}>20关注</span>
                        <span className={styles.status}>80回复</span>
                                                <span className={styles.status}>加入关注</span>

                      </div>
                    </span>
                  </div>
                  <div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                        <Avatar shape="square" size={32} src="http://n.sinaimg.cn/front/267/w640h427/20181108/0ctm-hnprhzw5214761.jpg" />
                    </span>
                    <span>
                      <span style={{verticalAlign: 'top' }}>图美图文</span>
                      <span>郑州盛大彩印</span>
                      <div>
                        <span className={styles.status}>20关注</span>
                        <span className={styles.status}>80回复</span>
                                                <span className={styles.status}>加入关注</span>

                      </div>
                    </span>
                  </div>
                  <div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                        <Avatar shape="square" size={32} src="http://www.people.com.cn/mediafile/pic/20140915/5/3319919736588078109.jpg?width=560" />
                    </span>
                    <span>
                      <span style={{verticalAlign: 'top' }}>吴孟达</span>
                      <span>营销设计部门</span>
                      <div>
                        <span className={styles.status}>20关注</span>
                        <span className={styles.status}>80回复</span>
                                                <span className={styles.status}>加入关注</span>

                      </div>
                    </span>
                  </div>
                  <div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                      <Avatar shape="square" size={32} src="http://n.sinaimg.cn/sinacn/w1280h720/20180118/eb6f-fyqtwzu0985450.jpg" />
                    </span>
                    <span>
                      <span style={{verticalAlign: 'top' }}>孙悟东</span>
                      <span>营销设计部门</span>
                      <div>
                        <span className={styles.status}>20关注</span>
                        <span className={styles.status}>80回复</span>
                                                <span className={styles.status}>加入关注</span>

                      </div>
                    </span>
                  </div>
                  <div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                     <Avatar shape="square" size={32} src="http://dingyue.nosdn.127.net/4sA5BtBoVgLEfd1qRgomHZKZUKwurVCbKRvQiFXCovBDL1536101741400.jpg" />
                    </span>
                    <span>
                      <span style={{verticalAlign: 'top' }}>董春旭</span>
                      <span>营销设计部门</span>
                      <div>
                        <span className={styles.status}>20关注</span>
                        <span className={styles.status}>80回复</span>
                                                <span className={styles.status}>加入关注</span>

                      </div>
                    </span>
                  </div>
                  <div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                       <Avatar shape="square" size={32} src="http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg" />
                    </span>
                    <span>
                      <span style={{verticalAlign: 'top' }}>董春旭</span>
                      <span>营销设计部门</span>
                      <div>
                        <span className={styles.status}>20关注</span>
                        <span className={styles.status}>80回复</span>
                          <span className={styles.status}>加入关注</span>

                      </div>
                    </span>
                  </div>
                  <div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                        <Avatar shape="square" size={32} src="http://n.sinaimg.cn/sinacn10/200/w600h400/20180617/ee30-hcyszsa7917130.jpg" />
                    </span>
                    <span>
                      <span style={{verticalAlign: 'top' }}>至尊宝</span>
                      <span>设计师</span>
                      <div>
                        <span className={styles.status}>20关注</span>
                        <span className={styles.status}>80回复</span>
                        <span className={styles.status}>加入关注</span>
                      </div>
                    </span>
                  </div>
                  <div className={styles.recommendItem} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', padding: '10px 0', borderBottom: '1px dashed rgb(238, 238, 238)'}}>
                    <span>
                      <Avatar shape="square" size={32} src="http://e.hiphotos.baidu.com/image/pic/item/10dfa9ec8a1363279e1ed28c9b8fa0ec09fac79a.jpg" />
                    </span>
                    <span>
                      <span style={{verticalAlign: 'top' }}>董春旭</span>
                      <span>营销设计部门</span>
                     <div>
                        <span className={styles.status}>20关注</span>
                        <span className={styles.status}>80回复</span>
                                               <span className={styles.status}>加入关注</span>

                      </div>
                    </span>
                  </div>
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
