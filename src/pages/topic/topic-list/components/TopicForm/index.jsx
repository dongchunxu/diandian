import React from 'react';
import { Modal, Input, Row, Col, Form, Select} from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';

const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 3 },
    sm: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 20 },
    sm: { span: 20 },
  },
};

@Form.create()
class TopicForm extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      visible: false,
      confirmLoading: false,
    };
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  handleOk = () => {
    this.loading();
    this.hide();

    // 异步请求
    this.cancelLoading();
  };

  handleCancel = () => {
    this.hide();
  };

  loading = () => {
    this.setState({
      confirmLoading: true,
    })
  };

  cancelLoading() {
    this.setState({
      confirmLoading: false,
    })
  }

  show() {
    this.setState({
      visible: true,
    })
  }

  hide() {
    this.setState({
      visible: false,
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (<div>
      <Modal
        title="创建一个主题"
        onOk={this.handleOk}
        visible={this.state.visible}
        confirmLoading={this.state.confirmLoading}
        onCancel={this.handleCancel}
        width={720}
      >
        <Row>
          <Col xl={18} lg={18} md={18} sm={18} xs={18}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} hideRequiredMark={false}>
              <Form.Item
                {...formItemLayout}
                label="标题"
              >
                {getFieldDecorator('title', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({
                        id: 'formandbasic-form.title.required',
                      }),
                    },
                  ],
                })(
                  <React.Fragment>
                    <Input
                      placeholder={formatMessage({
                        id: 'formandbasic-form.title.placeholder',
                      })}
                    />
                    <div style={{ height: '18px', lineHeight: '18px', fontSize: '12px', float: 'right'}} >0/120</div>
                  </React.Fragment>

                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label="正文"
              >
                {getFieldDecorator('goal', {
                  rules: [
                    {
                      required: false,
                      message: formatMessage({
                        id: 'formandbasic-form.goal.required',
                      }),
                    },
                  ],
                })(
                  <React.Fragment>
                    <TextArea
                      style={{
                        minHeight: 32,
                      }}
                      placeholder={formatMessage({
                        id: 'formandbasic-form.goal.placeholder',
                      })}
                      rows={8}
                    />
                    <div style={{ height: '18px', lineHeight: '18px', fontSize: '12px', float: 'right'}} >0/512</div>
                  </React.Fragment>,
                )}
              </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="分类"
                >
                  {getFieldDecorator('title', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage({
                          id: 'formandbasic-form.title.required',
                        }),
                      },
                    ],
                  })(
                    <Select defaultValue="lucy" style={{ width: 160 }}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>,
                  )}
                </Form.Item>
            </Form>
          </Col>
          <Col xl={5} lg={5} md={5} sm={5} xs={5} offset={1}>
            <div>
              <h4>如何优雅地混社区？</h4>
              <p>1. 讲真话
                <div>理性陈述，还原事实</div>
              </p>
              <p>2. 不啰嗦
                <div>明确表述，帖子主题</div>
              </p>
              <p>3. we are family
                <div>反对攻击，尊重伙伴</div>
              </p>
              <p>4. 友善邀请
                <div>专家牛人，荣耀邀请</div>
              </p>
              <p>5. 自由言论
                <div>自愿回帖，文责自负</div>
              </p>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>);
  }
}


export default TopicForm;
