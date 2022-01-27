import { ChartImpl } from './Chart';
import { ComponentImpl, implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA } from '../sunmao-helper';
import { LinePropsSchema as BaseLinePropsSchema } from '../generated/types/Line';
import { useMemo } from 'react';

const LinePropsSchema = Type.Object({
  ...BaseLinePropsSchema,
  className: Type.Optional(Type.String())
});
const LineStateSchema = Type.Object({});

const LineImpl: ComponentImpl<Static<typeof LinePropsSchema>> = (props) => {
  const { series = [] } = props;
  const lineSeries = useMemo(() => series.map(series => ({
    ...series,
    type: 'line'
  })), [series]);

  return (
    <ChartImpl
      {...props}
      series={lineSeries}
     />
  );
};

const exampleProperties: Static<typeof LinePropsSchema> = {
  className: '',
  title: {
    text: 'Bar'
  },
  grid: {},
  xAxis: [{
    name: '',
    type: 'category',
    data: ['Dimension 1', 'Dimension 2']
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
  series: [{
    name: 'Series 1',
    data: [1, 2]
  }, {
    name: 'Series 2',
    data: [3, 4]
  }]
};

const options = {
  version: 'echarts/v1',
  metadata: {
    ...FALLBACK_METADATA,
    name: 'line',
    displayName: 'Line',
    exampleProperties
  },
  spec: {
    properties: LinePropsSchema,
    state: LineStateSchema,
    methods: {},
    slots: [],
    styleSlots: ['wrapper'],
    events: ['onClick']
  }
};

export const Line = implementRuntimeComponent(options)(LineImpl);
