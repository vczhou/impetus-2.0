import  React, { useState , useEffect } from 'react';
import { Typography } from 'antd';
import TodoWidget from './TodoWidget';

const { Title } = Typography;

function PraiseJournalWidget(props) {
  return (
    <div className="praise-journal-widget">
      <TodoWidget />
    </div>
  );
}

export default PraiseJournalWidget;