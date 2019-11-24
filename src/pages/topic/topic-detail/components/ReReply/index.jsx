import React from 'react';
import { Row, Col, Card, Avatar, Icon, Button, Divider } from 'antd';
import Link from 'umi/link';
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
              gutter={12}
              type="flex"
              style={{
                marginTop: 0,
              }}
            >
              <Col xl={18} lg={18} md={18} sm={18} xs={18}>
                <Card
                  className={styles.topicContainer}
                  style={{ width: '100%', minHeight: '720px' }}
                  hoverable
                >
                  <div className={styles.breadcrumb}>
                    <span><Link to="/topic/">话题广场</Link></span>
                    <span style={{ color: '#1890FF' }}>&gt;</span>
                    <span><Link to="/topic/">二手交易</Link></span>
                  </div>
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
                      <span style={{ marginLeft: '10px' }}><Icon type="edit"/>&nbsp;&nbsp;&nbsp;回帖</span>·
                      <span>8条回复</span>·
                      <span>417次浏览</span>
                    </div>
                  </div>
                  <div className={styles.replyContainer}>
                    <div className={styles.replyCnt}>
                      共<span>23</span>条回复
                    </div>
                    <div className={styles.replyItemInfo}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                        <Avatar shape="circle" size={26} src={topicDetail.avatar} />
                        <span className={styles.author} >{topicDetail.author}</span>
                      </div>
                      <div className={styles.replyInfoContent}>
                        我们公司的工卡难道不是简约性冷淡主题的白板吗？有啥好看不好看的，进门刷卡能嘀嘀就行了呗。
                      </div>
                      <div className={styles.replyInfoStatus}>
                        <div className={styles.toolLike}>
                          <Icon type="like" theme="twoTone" twoToneColor="#118BFB" />
                          <span className={styles.likeCount}>2</span>
                        </div>
                        <span style={{ margin: '0 8px' }}>·</span>
                        <span><Icon type="message"/>&nbsp;&nbsp;添加评论</span>·
                        <span style={{ float: 'right'}}>回复时间: 3小时前</span>
                      </div>
                    </div>
                    <div className={styles.replyItemInfo}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                        <Avatar shape="circle" size={26} src={topicDetail.avatar} />
                        <span className={styles.author} >{topicDetail.author}</span>
                      </div>
                      <div className={styles.replyInfoContent}>
                        我们公司的工卡难道不是简约性冷淡主题的白板吗？有啥好看不
                      </div>
                      <div className={styles.replyInfoStatus}>
                        <div className={styles.toolLike}>
                          <Icon type="like" theme="twoTone" twoToneColor="#118BFB" />
                          <span className={styles.likeCount}>16</span>
                        </div>
                        <span style={{ margin: '0 8px' }}>·</span>
                        <span><Icon type="message"/>&nbsp;&nbsp;添加评论</span>
                        <span style={{ float: 'right'}}>回复时间: 1小时前</span>
                      </div>
                    </div>
                    <div className={styles.replyItemInfo}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                        <Avatar shape="circle" size={26} src={topicDetail.avatar} />
                        <span className={styles.author} >{topicDetail.author}</span>
                      </div>
                      <div className={styles.replyInfoContent}>
                       666~~~学到了=
                        说还是花还是比较厉害的
                        <br/>
                        真的不骗你~~
                      </div>
                      <div className={styles.replyInfoStatus}>
                        <div className={styles.toolLike}>
                          <Icon type="like" theme="twoTone" twoToneColor="#118BFB" />
                          <span className={styles.likeCount}>0</span>
                        </div>
                        <span style={{ margin: '0 8px' }}>·</span>
                        <span><Icon type="message"/>&nbsp;&nbsp;添加评论</span>
                        <span style={{ float: 'right'}}>回复时间: 20分钟前</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                <Card
                  className={styles.topicContainer}
                  style={{ width: '100%', minHeight: '180px' }}
                  hoverable
                >
                  <div style={{ textAlign: 'center'}}>
                    <div style={{ width: '50%', display: 'inline-block', paddingRight: '5px' }}>
                      <Button type="primary" block>关注帖子</Button>
                    </div>
                    <div style={{ width: '50%', display: 'inline-block', paddingLeft: '5px' }}>
                      <Button icon="edit" block>回帖</Button>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}><span style={{ color: '#118BFB', fontWeight: 'bold' }}>2 </span>人关注本帖</div>
                  <Divider style={{ borderWidth: '2px', height: '2px' }} />
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
