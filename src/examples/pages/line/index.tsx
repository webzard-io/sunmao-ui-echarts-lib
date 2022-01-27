import { Divider, Typography } from '@arco-design/web-react';
import { DemoWrapper } from '../../DemoWrapper';
import basic from './basic';

export const LineDemoPage: React.FC = () => {
  return (
    <div>
      <Typography.Title heading={3}>Basic Usage</Typography.Title>
      <DemoWrapper application={basic} />
      <Divider />
    </div>
  );
};
