import { ChartImpl } from './Chart';
import { ComponentImpl, implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA } from '../sunmao-helper';
import { LinePropsSchema as BaseLinePropsSchema } from '../generated/types/Line';
import { useMemo } from 'react';

const LinePropsSchema = Type.Object({
  ...BaseLinePropsSchema,
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
  notMerge: false,
  lazyUpdate: false,
  showLoading: false,
  title: {
    text: 'Line',
    left: '',
    right: '',
    top: '',
    bottom: '',
  },
  grid: {
    left: '',
    right: '',
    top: '',
    bottom: '',
    containLabel: true
  },
  xAxis: [{
    name: '',
    type: 'category',
    data: ['Dimension 1', 'Dimension 2'],
    nameLocation: 'center',
    offset: 0,
    position: 'bottom'
  }],
  yAxis: [{
    name: '',
    type: 'value',
    data: [],
    nameLocation: 'center',
    offset: 0,
    position: 'left'
  }],
  tooltip: {
    trigger: 'axis',
    triggerOn: 'mousemove'
  },
  legend: {
    show: true,
    data: [],
    type: 'scroll',
    left: '',
    right: '',
    top: '',
    bottom: '',
    icon: 'auto'
  },
  color: [],
  series: [{
    name: 'Series 1',
    label: {
      show: false,
      position: 'top',
    },
    data: [1, 2],
    symbol: 'circle',
    showSymbol: true,
    smooth: true
  }, {
    name: 'Series 2',
    label: {
      show: false,
      position: 'top',
    },
    data: [3, 4],
    symbol: 'circle',
    showSymbol: true,
    smooth: true
  }]
};

const options = {
  version: 'echarts/v1',
  metadata: {
    ...FALLBACK_METADATA,
    name: 'line',
    displayName: 'Line',
    exampleProperties,
    annotations: {
      category: 'Chart',
    },
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
