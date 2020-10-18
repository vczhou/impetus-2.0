import  React from 'react';
import { Tabs } from 'antd';
import DevotionalContent from './DevotionalContent';
import MissionsContent from './MissionsContent';
import PrayerWidget from './PrayerWidget';
import PraiseJournalWidget from './PraiseJournalWidget';

const { TabPane } = Tabs;

function SpiritWidget(props) {
  return (
    <div className="spirit-widget">
	  <Tabs defaultActiveKey="1">
	    <TabPane tab="Devotional" key="1">
	      <DevotionalContent />
	    </TabPane>
	    <TabPane tab="Missions" key="2">
	      <MissionsContent />
	    </TabPane>
	    <TabPane tab="Prayer" key="3">
	      <PrayerWidget />
	    </TabPane>
      <TabPane tab="Praise" key="4">
        <PraiseJournalWidget />
      </TabPane>
	  </Tabs>
    </div>
  );
}

export default SpiritWidget;
