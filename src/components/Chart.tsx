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
});
const ChartStateSchema = Type.Object({});

export const ChartImpl: ComponentImpl<any> = props => {
  const { elementRef, customStyle, callbackMap } = props;
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
    return filterProperties(
      {
        title,
        grid,
        yAxis,
        xAxis,
        legend,
        tooltip,
        color,
        series,
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
      { deep: true }
    );
  }, [title, grid, yAxis, xAxis, legend, tooltip, color, series]);
  const onClick = () => {
    callbackMap?.onClick?.();
  };
  const events = {
    click: onClick,
  };

  return (
    <div ref={elementRef}>
      <ReactEChartsCore
        {...cProps}
        className={cx(className, css(customStyle?.wrapper))}
        echarts={echarts}
        onEvents={events}
        option={option}
      />
    </div>
  );
};

const exampleProperties: Static<typeof ChartPropsSchema> = {
  notMerge: false,
  lazyUpdate: false,
  showLoading: false,
  title: {
    text: 'Chart',
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
    containLabel: true,
  },
  xAxis: [
    {
      name: '',
      type: 'category',
      data: ['Dimension 1', 'Dimension 2'],
      nameLocation: 'center',
      offset: 0,
      position: 'bottom',
    },
  ],
  yAxis: [
    {
      name: '',
      type: 'value',
      data: [],
      nameLocation: 'center',
      offset: 0,
      position: 'left',
    },
  ],
  tooltip: {
    trigger: 'axis',
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
  series: [
    {
      type: 'line',
      name: 'Series 1',
      label: {
        show: false,
        position: 'top',
      },
      data: [1, 2],
      symbol: 'circle',
      showSymbol: true,
      smooth: true,
    },
    {
      type: 'bar',
      name: 'Series 2',
      label: {
        show: false,
        position: 'top',
      },
      data: [1, 2],
      barWidth: '',
      barGap: '',
      barCategoryGap: '',
      stack: '',
      showBackground: false,
    },
  ],
};

const options = {
  version: 'echarts/v1',
  metadata: {
    ...FALLBACK_METADATA,
    name: 'chart',
    displayName: 'Chart',
    exampleProperties,
    annotations: {
      category: 'Chart',
    },
  },
  spec: {
    properties: ChartPropsSchema,
    state: ChartStateSchema,
    methods: {},
    slots: [],
    styleSlots: ['wrapper'],
    events: ['onClick'],
  },
};

export const Chart = implementRuntimeComponent(options)(ChartImpl);
