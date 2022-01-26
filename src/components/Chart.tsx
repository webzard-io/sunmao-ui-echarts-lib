import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { ComponentImpl, implementRuntimeComponent } from '@sunmao-ui/runtime';
import { css, cx } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps } from '../sunmao-helper';
import { ChartPropsSchema as BaseChartPropsSchema } from '../generated/types/Chart';
import { useMemo } from 'react';
import { filterProperties } from '../utils/object';

const ChartPropsSchema = Type.Object({
  ...BaseChartPropsSchema,
  className: Type.Optional(Type.String())
});
const ChartStateSchema = Type.Object({});

export const ChartImpl: ComponentImpl<Static<typeof ChartPropsSchema>> = (props) => {
  const { customStyle, callbackMap } = props;
  const {
    className,
    title,
    grid,
    yAxis,
    xAxis,
    legend,
    tooltip,
    color,
    series,
    ...cProps
  } = getComponentProps(props);
  const option = useMemo(() => {
    return filterProperties({
      title,
      grid,
      yAxis,
      xAxis,
      legend,
      tooltip,
      color,
      series
    },
    (option, key, path) => {
      const value = option[key];

      if (value !== undefined && value !== '') {
        const strPath = path.join('.');
        const checkedEmptyArrayProperties = ['color', 'legend.data'];

        if (checkedEmptyArrayProperties.includes(strPath) && Array.isArray(value)) {
          return value.length !== 0;
        } else {
          return true;
        }
      }

      return false;
    },
    { deep: true });
  }, [title, grid, yAxis, xAxis, legend, tooltip, color, series]);
  const onClick = () => {
    callbackMap?.onClick?.();
  };
  const events = {
    click: onClick
  };

  return (
    <ReactEChartsCore
      {...cProps}
      className={cx(className, css(customStyle?.wrapper))}
      echarts={echarts}
      onEvents={events}
      option={option}
     />
  );
};

const exampleProperties: Static<typeof ChartPropsSchema> = {
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
    type: 'value'
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
    name: 'chart',
    displayName: 'Chart',
    exampleProperties
  },
  spec: {
    properties: ChartPropsSchema,
    state: ChartStateSchema,
    methods: {},
    slots: [],
    styleSlots: ['wrapper'],
    events: ['onClick']
  }
};

export const Chart = implementRuntimeComponent(options)(ChartImpl);
