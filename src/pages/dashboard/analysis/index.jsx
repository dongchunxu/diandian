import { Card, Col, Dropdown, Empty, Icon, Menu, Row, Badge, Button } from 'antd';
import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import { getTimeDistance } from './utils/utils';
import styles from './style.less';
import SmallCard from '@/pages/dashboard/analysis/components/SmallCard';
import TopicSummary from '@/pages/dashboard/analysis/components/TopicPannel';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import TopicForm from '@/pages/dashboard/analysis/components/TopicForm';
const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));
const SalesCard = React.lazy(() => import('./components/SalesCard'));
const TopSearch = React.lazy(() => import('./components/TopSearch'));
const ProportionSales = React.lazy(() => import('./components/ProportionSales'));
const OfflineData = React.lazy(() => import('./components/OfflineData'));

@connect(({ dashboardAndanalysis, loading }) => ({
  dashboardAndanalysis,
  loading: loading.effects['dashboardAndanalysis/fetch'],
}))
class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
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
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndanalysis/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = e => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = key => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = rangePickerValue => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  selectDate = type => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  isActive = type => {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);

    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }

    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }

    return '';
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { dashboardAndanalysis, loading } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = dashboardAndanalysis;
    let salesPieData;

    if (salesType === 'all') {
      salesPieData = salesTypeData;
    } else {
      salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
    }

    const menu = (
      <Menu>
        <Menu.Item>操作一</Menu.Item>
        <Menu.Item>操作二</Menu.Item>
      </Menu>
    );
    const dropdownGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Icon type="ellipsis" />
        </Dropdown>
      </span>
    );
    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);

    const tabList = [
      {
        key: 'tab1',
        tab: '主题',
      },
      {
        key: 'tab2',
        tab: '帖子',
      },
    ];
    const contentList = {
      tab1: <React.Fragment>
        <Row gutter={24}>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="行业交流"
              imgUrl="http://pic1.win4000.com/wallpaper/d/57b432151e673.jpg"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="二手交易"
              imgUrl="http://www.33lc.com/article/UploadPic/2012-8/2012838583248130.jpg"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="推广"
              imgUrl="http://hbimg.b0.upaiyun.com/b2a22f618f1458e9745ca20587a6354efbd62d0e114601-xlYJeQ_fw658"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="报价相关"
              imgUrl="http://pic22.nipic.com/20120707/10486599_175616342138_2.jpg"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="吐槽八卦"
              imgUrl="http://pic32.nipic.com/20130819/3822951_105810231000_2.jpg"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="吐槽八卦"
              imgUrl="http://pic1.win4000.com/wallpaper/c/57d65d98ae19a.jpg"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="吐槽八卦"
              imgUrl="http://pic1.win4000.com/wallpaper/4/58956d4978910.jpg"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="行业交流"
              imgUrl="http://pic1.win4000.com/wallpaper/d/57b432151e673.jpg"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="二手交易"
              imgUrl="http://www.33lc.com/article/UploadPic/2012-8/2012838583248130.jpg"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="推广"
              imgUrl="http://hbimg.b0.upaiyun.com/b2a22f618f1458e9745ca20587a6354efbd62d0e114601-xlYJeQ_fw658"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="全部话题"
              style={{ width: 250, marginTop: 16 }} />
          </Col>
        </Row>
      </React.Fragment>,
      tab2: <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
                    暂无数据~
          </span>
        }
      >
      </Empty>,
    };

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
                style={{ width: '100%' }}
                title="我关注的主题（帖子）"
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={key => {
                  this.onTabChange(key, 'key');
                }}
                hoverable
              >
                {contentList[this.state.key]}
              </Card>

              <Card
                className={styles.myHotTopic}
                style={{ width: '100%' }}
                title="今日热门"
                extra={<Button onClick={this.openAddTopicModal} type="primary" size="small" ><Icon type="plus"/>发表</Button>}
                onTabChange={key => {
                  this.onTabChange(key, 'key');
                }}
                hoverable
              >
                <TopicSummary title="理性讨论这个问题" authorName="董春旭" />
              </Card>
            </Col>
            <Col xl={8} lg={24} md={24} sm={24} xs={24}>
              <Card
                className={styles.introduce}
                style={{ width: '100%' }}
                title="介绍"
                hoverable
              >
                <div style={{ minHeight: '85px', position: 'relative' }}>
                  <p
                    style={{ position: 'absolute', left: 0, top: 0, display: 'inline-block', verticalAlign: 'top', margin: 0 }} >
                      <span className="ct-image" style={{ width: '108px' }}>
                        <img alt="图片加载失败"
                                width="108"
                                src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:c06c7479/%E6%AC%A2%E8%BF%8E%E5%8D%A1%E7%89%87%E6%8F%92%E5%9B%BE.png" />
                      </span>
                  </p>
                  <div style={{ display: 'inline-block', marginLeft: '136px' }} >
                    <h3 style={{ fontSize: '20px' }}>欢迎来到 点我印社区</h3>
                    <p>
                      <span>不确定从哪里开始？</span>
                      <span style={{ display: 'inline-block' }}>查看 <a>社区管理指南</a> 和 <a>报价指南</a></span>
                    </p>
                  </div>
                </div>
              </Card>
              <Card
                style={{ width: '100%', height: '220px' }}
                title="我的浏览记录"
                hoverable
              >
                <Empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  imageStyle={{
                    height: 60,
                  }}
                  description={
                    <span>
                      暂无数据~
                    </span>
                  }
                >
                </Empty>,
              </Card>
              <Card
                style={{ width: '100%' }}
                title="我的浏览记录"
                hoverable
              >
                <Empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  imageStyle={{
                    height: 60,
                  }}
                  description={
                    <span>
                      暂无数据~
                    </span>
                  }
                >
                </Empty>,
              </Card>
              <div>
                <span style={{marginLeft: '5px', color: 'rgba(0, 0, 0, 0.38)' }}><Badge status="success" />2121 在线</span>
                <span style={{ marginLeft: '10px', color: 'rgba(0, 0, 0, 0.38)' }}>注册会员 18000</span>
              </div>
              <TopicForm onRef={this.bindRefModal} />
            </Col>
          </Row>
        </React.Fragment>
      </GridContent>
      </PageHeaderWrapper>
    );
  }

  bindRefModal = (ref) => {
    this.child = ref;
  };

  openAddTopicModal = () => {
    this.child.show();
  };
}

export default Analysis;
