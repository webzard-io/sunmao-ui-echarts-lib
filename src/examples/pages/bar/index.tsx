import { Divider, Typography } from '@arco-design/web-react';
import { DemoWrapper } from '../../DemoWrapper';
import basic from './basic';
import axis from './axis';
import gap from './gap';
import stack from './stack';
import color from './color';

export const BarDemoPage: React.FC = () => {
  return (
    <div>
      <Typography.Title heading={3}>Basic Usage</Typography.Title>
      <DemoWrapper application={basic} />
      <Divider />
      <Typography.Title heading={3}>Set YAxis To Category</Typography.Title>
      <DemoWrapper application={axis} />
      <Divider />
      <Typography.Title heading={3}>Bar Gap</Typography.Title>
      <DemoWrapper application={gap} />
      <Divider />
      <Typography.Title heading={3}>Bar Stack</Typography.Title>
      <DemoWrapper application={stack} />
      <Divider />
      <Typography.Title heading={3}>Bar Color</Typography.Title>
      <DemoWrapper application={color} />
      <Divider />
    </div>
  );
};
