import  React from 'react';
import TodoWidget from './TodoWidget';
import { Card, Col, Row } from 'antd';


function PrayerWidget(props) {
  return (
    <div className="prayer-widget">
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Monday" bordered={false}>
              <TodoWidget />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Tuesday" bordered={false}>
              <TodoWidget />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Wednesday" bordered={false}>
              <TodoWidget />
            </Card>
          </Col>
                <Col span={8}>
            <Card title="Thursday" bordered={false}>
              <TodoWidget />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Friday" bordered={false}>
              <TodoWidget />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Saturday" bordered={false}>
              <TodoWidget />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Sunday" bordered={false}>
              <TodoWidget />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PrayerWidget;
