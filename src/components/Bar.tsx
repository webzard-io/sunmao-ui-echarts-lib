import { ChartImpl } from './Chart';
import { ComponentImpl, implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA } from '../sunmao-helper';
import { BarPropsSchema as BaseBarPropsSchema } from '../generated/types/Bar';

const BarPropsSchema = Type.Object({
  ...BaseBarPropsSchema,
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
  notMerge: false,
  lazyUpdate: false,
  showLoading: false,
  title: {
    text: 'Bar',
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
      position: 'top'
    },
    data: [
      1,
      2
    ],
    barWidth: '',
    barGap: '',
    barCategoryGap: '',
    stack: '',
    showBackground: false,
  }, {
    name: 'Series 2',
    label: {
      show: false,
      position: 'top'
    },
    data: [
      3,
      4
    ],
    barWidth: '',
    barGap: '',
    barCategoryGap: '',
    stack: '',
    showBackground: false,
  }]
};

const options = {
  version: 'echarts/v1',
  metadata: {
    ...FALLBACK_METADATA,
    name: 'bar',
    displayName: 'Bar',
    exampleProperties,
    annotations: {
      category: 'Chart',
    },
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
