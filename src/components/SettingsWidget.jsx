import React from 'react';

import { Typography, Form, Input, Button} from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function SettingsWidget(props) {
  const onFinish = values => {
    props.updateSetup(values.name, values.email);
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  console.log("props name", props.name);
  return (
    <div >
      <Title level={3}>Update your info</Title>
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
        >
        <Input defaultValue={props.name}/>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
        >
          <Input defaultValue={props.email}/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SettingsWidget;