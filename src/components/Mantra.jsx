import  React, { useState , useEffect } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function Mantra(props) {
  return (
    <div className="mantra">
       <Title level={5}>“Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.” -Deuteronomy 31:6</Title>
    </div>
  );
}

export default Mantra;