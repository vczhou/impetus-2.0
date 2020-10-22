import React from 'react'
import TodoList from './TodoList';
import { Button , Space, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

class TodoWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <Form onSubmit={this.handleSubmit}>
        <Space>
          <Input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            size="default"
          />
          <Button shape="circle" icon={<PlusOutlined />} onClick={this.handleSubmit} />
          </Space>
        </Form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default TodoWidget;