import { ChartImpl } from './Chart';
import { ComponentImpl, implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA } from '../sunmao-helper';
import { PiePropsSchema as BasePiePropsSchema } from '../generated/types/Pie';
import { useMemo } from 'react';

const PiePropsSchema = Type.Object({
  ...BasePiePropsSchema,
  className: Type.Optional(Type.String())
});
const PieStateSchema = Type.Object({});

const PieImpl: ComponentImpl<Static<typeof PiePropsSchema>> = (props) => {
  const { series = [] } = props;
  const pieSeries = useMemo<any>(() => series.map(series => ({
    ...series,
    type: 'pie'
  })), [series]);

  return (
    <ChartImpl
      {...props}
      series={pieSeries}
     />
  );
};

const exampleProperties: Static<typeof PiePropsSchema> = {
  className: '',
  title: {
    text: ''
  },
  grid: {},
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: true,
    data: []
  },
  color: [],
  series: [],
  xAxis: [{
    name: '',
    type: 'category',
    data: []
  }],
  yAxis: [{
    name: '',
    type: 'value',
    data: []
  }]
};

const options = {
  version: 'echarts/v1',
  metadata: {
    ...FALLBACK_METADATA,
    name: 'pie',
    displayName: 'Pie',
    exampleProperties
  },
  spec: {
    properties: PiePropsSchema,
    state: PieStateSchema,
    methods: {},
    slots: [],
    styleSlots: ['wrapper'],
    events: ['onClick']
  }
};

export const Pie = implementRuntimeComponent(options)(PieImpl);
