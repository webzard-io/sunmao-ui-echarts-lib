import { lazy, Suspense, useMemo } from 'react';
import { ComponentImpl, implementRuntimeComponent } from '@sunmao-ui/runtime';
import { css, cx } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps } from '../sunmao-helper';
import { ChartPropsSpec as BaseChartPropsSpec } from '../generated/types/Chart';
import { filterProperties } from '../utils/object';
import { echartsInstance, initEchartsInstance } from './echartsInstance';

const ChartPropsSpec = Type.Object({
  ...BaseChartPropsSpec,
});
const ChartStateSpec = Type.Object({});

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

  const ReactEChartsCore = lazy(async () => {
    if (!echartsInstance) {
      await initEchartsInstance();
    }
    return import('echarts-for-react');
  });

  return (
    <div ref={elementRef}>
      <Suspense fallback={'Loading echarts'}>
        <ReactEChartsCore
          {...cProps}
          className={cx(className, css(customStyle?.wrapper))}
          echarts={echartsInstance}
          onEvents={events}
          option={option}
        />
      </Suspense>
    </div>
  );
};

const exampleProperties: Static<typeof ChartPropsSpec> = {
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
    properties: ChartPropsSpec,
    state: ChartStateSpec,
    methods: {},
    slots: {},
    styleSlots: ['wrapper'],
    events: ['onClick'],
  },
};

export const Chart = implementRuntimeComponent(options)(ChartImpl);
