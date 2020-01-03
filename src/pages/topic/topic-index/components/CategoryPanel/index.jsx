import React from 'react';
import { Row, Col} from 'antd';
import Link from 'umi/link';
import SmallCard from '@/pages/topic/topic-index/components/SmallCard';
import ChatGroup from '@/assets/undraw_chatting_2yvo.svg';
import TradeIn from '@/assets/undraw_make_it_rain_iwk4.svg';
import Job from '@/assets/undraw_multitasking_hqg3.svg';
import Price from '@/assets/undraw_printing_invoices_5r4r.svg';
import Conversation from '@/assets/undraw_word_of_mouth_v1j9.svg';
import Advise from '@/assets/undraw_wall_post_83ul.svg';
import Deal from '@/assets/undraw_business_deal_cpi9.svg';

const categoryInfo = [
  {
    id: 1,
    title: '行业交流',
    imgUrl: ChatGroup,
  },
  {
    id: 2,
    title: '社会热点',
    imgUrl: Advise,
  },
  {
    id: 3,
    title: '二手交易',
    imgUrl: TradeIn,
  },
  {
    id: 4,
    title: '求职招聘',
    imgUrl: Job,
  },
  {
    id: 5,
    title: '报价相关',
    imgUrl: Price,
  },
  {
    id: 6,
    title: '吐槽八卦',
    imgUrl: Conversation,
  },
  {
    id: 7,
    title: '推广',
    imgUrl: Deal,
  },
];


class CategoryPanel extends React.Component {

  render() {
    const { statics } = this.props;
    return (
      <React.Fragment>
        <Row gutter={24}>
          {
            categoryInfo.map(c => {
              return (<Col xl={8} lg={8} md={8} sm={8} xs={8}>
                <Link to={`/topic/category/${c.id}/list`}>
                  <SmallCard
                    title={c.title}
                    imgUrl={c.imgUrl}
                    style={{
                      width: 250,
                      marginTop: 16,
                    }}
                    today={statics[`${c.id}`] ? statics[`${c.id}`].today : 0 }
                    total={statics[`${c.id}`] ? statics[`${c.id}`].total : 0 }
                  />
                </Link>
              </Col>)
            })
          }
          <Col xl={8} lg={8} md={8} sm={8} xs={8}>
            <SmallCard
              title="全部"
              style={{
                width: 250,
                marginTop: 16,
              }}
              today={10}
              total={100}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default CategoryPanel;
