import { ChartImpl } from './Chart';
import { ComponentImpl, implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA } from '../sunmao-helper';
import { BarPropsSchema as BaseBarPropsSchema } from '../generated/types/Bar';

const BarPropsSchema = Type.Object({
  ...BaseBarPropsSchema,
  className: Type.Optional(Type.String())
});
const BarStateSchema = Type.Object({});

const BarImpl: ComponentImpl<Static<typeof BarPropsSchema>> = (props) => {
  const { series = [] } = props;
  const barSeries = series.map(series => ({
    ...series,
    type: 'bar'
  }));

  return (
    <ChartImpl
      {...props}
      series={barSeries}
     />
  );
};

const exampleProperties: Static<typeof BarPropsSchema> = {
  className: '',
  title: {
    text: ''
  },
  grid: {},
  xAxis: [{
    name: '',
    type: 'category',
    data: []
  }],
  yAxis: [{
    name: '',
    type: 'value',
    data: []
  }],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    show: true,
    data: []
  },
  color: [],
  series: []
};

const options = {
  version: 'echarts/v1',
  metadata: {
    ...FALLBACK_METADATA,
    name: 'bar',
    displayName: 'Bar',
    exampleProperties
  },
  spec: {
    properties: BarPropsSchema,
    state: BarStateSchema,
    methods: {},
    slots: [],
    styleSlots: ['wrapper'],
    events: ['onClick']
  }
};

export const Bar = implementRuntimeComponent(options)(BarImpl);
