import { ChartImpl } from './Chart';
import { ComponentImpl, implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA } from '../sunmao-helper';
import { PiePropsSchema as BasePiePropsSchema } from '../generated/types/Pie';
import { useMemo } from 'react';

const PiePropsSchema = Type.Object({
  ...BasePiePropsSchema,
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
  notMerge: false,
  lazyUpdate: false,
  showLoading: false,
  title: {
    text: 'Pie',
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
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
  },
  legend: {
    show: true,
    data: [],
    type: 'scroll',
    left: '',
    right: '',
    top: '',
    bottom: '',
  },
  color: [],
  series: [{
    name: 'Series 1',
    label: {
      show: false,
      position: 'inside',
    },
    data: [{
      name: 'A',
      value: 1,
    }, {
      name: 'B',
      value: 2
    }]
  }]
};

const options = {
  version: 'echarts/v1',
  metadata: {
    ...FALLBACK_METADATA,
    name: 'pie',
    displayName: 'Pie',
    exampleProperties,
    annotations: {
      category: 'Chart',
    },
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
