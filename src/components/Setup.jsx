import React from 'react'
import { Typography, Form, Input, Button, DatePicker} from 'antd';
import 'antd/dist/antd.css';

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
    props.completeSetup(values.name, values.email);
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onBirthdayPickerChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="setup">
      <Title>Let's get to know you.</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Birthday"
          name="birthday"
          rules={[{ required: true, message: 'Please input your birthday!' }]}
        >
          <DatePicker onChange={onBirthdayPickerChange} />
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
