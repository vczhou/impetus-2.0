import React from 'react'
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Setup(props) {
  const onFinish = values => {
    props.completeSetup(values.name);
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="setup-page">
      <Title>Let's get to know you.</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="What's your name?"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
          label="Email?"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Birthday?"
          name="birthday"
          rules={[{ required: true, message: 'Please input your birthday!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Get Started
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Setup;
