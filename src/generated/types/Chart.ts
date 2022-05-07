import { Type, TOptional, TSchema } from '@sinclair/typebox';
import { StringUnion } from '../../sunmao-helper';

export const TitleSpec = {
  text: Type.String({
    title: 'Text',
  }),
  left: Type.String({
    title: 'Left',
  }),
  right: Type.String({
    title: 'Right',
  }),
  top: Type.String({
    title: 'Top',
  }),
  bottom: Type.String({
    title: 'Bottom',
  }),
};

export const GridSpec = {
  left: Type.String({
    title: 'Left',
  }),
  right: Type.String({
    title: 'Right',
  }),
  top: Type.String({
    title: 'Top',
  }),
  bottom: Type.String({
    title: 'Bottom',
  }),
  containLabel: Type.Boolean({
    title: 'Should Contain Label',
  }),
};

export const AxisSpec = {
  name: Type.String({
    title: 'Name',
  }),
  nameLocation: StringUnion(['end', 'start', 'center'], {
    title: 'Name Location',
  }),
  type: StringUnion(['value', 'category'], {
    title: 'Type',
  }),
  offset: Type.Number({
    title: 'Offset',
  }),
  data: Type.Array(Type.String(), {
    title: 'Data',
  }),
};

export const TooltipSpec = {
  trigger: StringUnion(['axis', 'item', 'none'], {
    title: 'Trigger',
  }),
  triggerOn: StringUnion(['mousemove', 'click', 'mousemove|click', 'none'], {
    title: 'Trigger Way',
  }),
};

export const LegendSpec = {
  show: Type.Boolean({
    title: 'Show',
  }),
  data: Type.Array(Type.String(), {
    title: 'Data',
  }),
  icon: Type.Optional(
    StringUnion(
      ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'],
      {
        title: 'Icon',
      }
    )
  ),
  type: StringUnion(['plain', 'scroll'], {
    title: 'Type',
  }),
  left: Type.String({
    title: 'Left',
  }),
  right: Type.String({
    title: 'Right',
  }),
  top: Type.String({
    title: 'Top',
  }),
  bottom: Type.String({
    title: 'Bottom',
  }),
};

export const SeriesLabelSpec = {
  show: Type.Boolean(),
  position: StringUnion(
    [
      'top',
      'left',
      'right',
      'bottom',
      'inside',
      'insideLeft',
      'insideRight',
      'insideTop',
      'insideBottom',
      'insideTopLeft',
      'insideBottomLeft',
      'insideTopRight',
      'insideBottomRight',
    ],
    {
      title: 'Position',
    }
  ),
};

export const SeriesSpec = {
  name: Type.String({
    title: 'Name',
  }),
  label: Type.Object(SeriesLabelSpec, {
    title: 'Label',
  }),
  data: Type.Array(Type.Number(), {
    title: 'Data',
  }),
};

export const ComponentPropsSpec = {
  notMerge: Type.Boolean({
    title: 'Not Merge Option',
    category: 'Basic',
  }),
  lazyUpdate: Type.Boolean({
    title: 'Enable Lazy Update',
    category: 'Basic',
  }),
  showLoading: Type.Boolean({
    title: 'Loading',
    category: 'Basic',
  }),
};

export const BaseChartSpec = {
  ...ComponentPropsSpec,
  title: Type.Object(TitleSpec, {
    category: 'Title',
  }),
  grid: Type.Object(GridSpec, {
    category: 'Grid',
  }),
  xAxis: Type.Array(
    Type.Object({
      ...AxisSpec,
      position: StringUnion(['bottom', 'top'], {
        title: 'Position',
      }),
    }),
    {
      category: 'XAxis',
    }
  ),
  yAxis: Type.Array(
    Type.Object({
      ...AxisSpec,
      position: StringUnion(['left', 'right'], {
        title: 'Position',
      }),
    }),
    {
      category: 'YAxis',
    }
  ),
  tooltip: Type.Object(TooltipSpec, {
    category: 'Tooltip',
  }),
  legend: Type.Object(LegendSpec, {
    category: 'Legend',
  }),
  color: Type.Array(Type.String(), {
    category: 'Color',
  }),
};

const LineConditions = [
  {
    key: 'type',
    value: 'line',
  },
];
const BarConditions = [
  {
    key: 'type',
    value: 'bar',
  },
];

export const LineSpecObject = {
  symbol: StringUnion(
    ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'],
    {
      title: 'Symbol',
    }
  ),
  showSymbol: Type.Boolean({
    title: 'Show Symbol',
  }),
  smooth: Type.Boolean({
    title: 'Smooth',
  }),
};
export const BarSpecObject = {
  stack: Type.String({
    title: 'Stack',
  }),
  barWidth: Type.String({
    title: 'Bar Width',
  }),
  barGap: Type.String({
    title: 'Bar Gap',
  }),
  barCategoryGap: Type.String({
    title: 'Bar Category Gap',
  }),
  showBackground: Type.Boolean({
    title: 'Show Background',
  }),
};
export const PieSpecObject = {
  data: Type.Array(
    Type.Object({
      value: Type.Number(),
      name: Type.String(),
    }),
    {
      title: 'Data',
    }
  ),
  radius: Type.Optional(
    Type.Union([Type.Number(), Type.String()], {
      title: 'Radius',
    })
  ),
  center: Type.Optional(
    Type.Array(Type.Union([Type.Number(), Type.String()]), {
      title: 'Center',
    })
  ),
};

type Optional<T extends Record<string, TSchema>> = {
  [P in keyof T]: TOptional<T[P]>;
};

export const ChartPropsSpec = {
  ...BaseChartSpec,
  series: Type.Array(
    Type.Object({
      type: StringUnion(['line', 'bar'], {
        title: 'Type',
      }),
      ...SeriesSpec,
      // line
      ...(Object.keys(LineSpecObject).reduce((result, key) => {
        result[key] = Type.Optional({
          ...LineSpecObject[key as keyof typeof LineSpecObject],
          conditions: LineConditions,
        });

        return result;
      }, {} as Record<string, any>) as Optional<typeof LineSpecObject>),
      // bar
      ...(Object.keys(BarSpecObject).reduce((result, key) => {
        result[key] = Type.Optional({
          ...BarSpecObject[key as keyof typeof BarSpecObject],
          conditions: BarConditions,
        });

        return result;
      }, {} as Record<string, any>) as Optional<typeof BarSpecObject>),
    }),
    {
      title: 'Series',
      category: 'Series',
      widget: 'core/v1/array',
      widgetOptions: {
        displayedKeys: ['name'],
      },
    }
  ),
};
