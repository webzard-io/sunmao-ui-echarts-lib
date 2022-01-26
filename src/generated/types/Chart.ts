import { Type } from '@sinclair/typebox';
import { StringUnion } from '../../sunmao-helper';

export const TitleSchema = {
  text: Type.Optional(Type.String()),
  left: Type.Optional(Type.Union([
    Type.String(),
    Type.Number()
  ])),
  right: Type.Optional(Type.Union([
    Type.String(),
    Type.Number()
  ])),
  top: Type.Optional(Type.Union([
    Type.String(),
    Type.Number()
  ])),
  bottom: Type.Optional(Type.Union([
    Type.String(),
    Type.Number()
  ]))
};

export const GridSchema = {
  left: Type.Optional(Type.Union([Type.String(), Type.Number()])),
  right: Type.Optional(Type.Union([Type.String(), Type.Number()])),
  top: Type.Optional(Type.Union([Type.String(), Type.Number()])),
  bottom: Type.Optional(Type.Union([Type.String(), Type.Number()])),
  containLabel: Type.Optional(Type.Boolean())
};

export const AxisSchema = {
  name: Type.Optional(Type.String()),
  nameLocation: Type.Optional(StringUnion(['end', 'start', 'center'])),
  type: StringUnion(['value', 'category']),
  offset: Type.Optional(Type.Number()),
  data: Type.Optional(Type.Array(Type.String()))
};

export const TooltipSchema = {
  trigger: StringUnion(['axis', 'item', 'none']),
  triggerOn: Type.Optional(StringUnion(['mousemove', 'click', 'mousemove|click', 'none']))
};

export const LegendSchema = {
  show: Type.Boolean(),
  data: Type.Optional(Type.Array(Type.String())),
  icon: Type.Optional(StringUnion(['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'])),
  type: Type.Optional(StringUnion(['plain', 'scroll'])),
  left: Type.Optional(Type.Union([
    Type.String(),
    Type.Number()
  ])),
  right: Type.Optional(Type.Union([
    Type.String(),
    Type.Number()
  ])),
  top: Type.Optional(Type.Union([
    Type.String(),
    Type.Number()
  ])),
  bottom: Type.Optional(Type.Union([
    Type.String(),
    Type.Number()
  ]))
};

export const SeriesLabelSchema = {
  show: Type.Boolean(),
  position: Type.Optional(StringUnion([
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
    'insideBottomRight'
  ]))
};

export const SeriesSchema = {
  name: Type.Optional(Type.String()),
  label: Type.Optional(Type.Object(SeriesLabelSchema)),
  data: Type.Array(Type.Number())
};

export const ComponentPropsSchema = {
  notMerge: Type.Optional(Type.Boolean()),
  lazyUpdate: Type.Optional(Type.Boolean()),
  showLoading: Type.Optional(Type.Boolean())
};

export const BaseChartSchema = {
  ...ComponentPropsSchema,
  title: Type.Object(TitleSchema),
  grid: Type.Object(GridSchema),
  xAxis: Type.Array(Type.Object({
    ...AxisSchema,
    position: Type.Optional(StringUnion(['bottom', 'top']))
  })),
  yAxis: Type.Array(Type.Object({
    ...AxisSchema,
    position: Type.Optional(StringUnion(['left', 'right']))
  })),
  tooltip: Type.Object(TooltipSchema),
  legend: Type.Object(LegendSchema),
  color: Type.Optional(Type.Array(Type.String()))
};

export const ChartPropsSchema = {
  ...BaseChartSchema,
  series: Type.Array(Type.Object({
    ...SeriesSchema,
    // line
    symbol: Type.Optional(StringUnion(['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'])),
    showSymbol: Type.Optional(Type.Boolean()),
    smooth: Type.Optional(Type.Boolean()),
    // bar
    barWidth: Type.Optional(Type.String()),
    barGap: Type.Optional(Type.String()),
    barCategoryGap: Type.Optional(Type.String()),
    stack: Type.Optional(Type.String()),
    // pie
    radius: Type.Optional(Type.Union([Type.Number(), Type.String()])),
    center: Type.Optional(Type.Array(Type.Union([Type.Number(), Type.String()])))
  }))
};
