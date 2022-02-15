import { Type } from '@sinclair/typebox';
import { StringUnion } from '../../sunmao-helper';

export const TitleSchema = {
  text: Type.String({
    title: 'Text'
  }),
  left: Type.String({
    title: 'Left'
  }),
  right: Type.String({
    title: 'Right'
  }),
  top: Type.String({
    title: 'Top'
  }),
  bottom: Type.String({
    title: 'Bottom'
  })
};

export const GridSchema = {
  left: Type.String({
    title: 'Left'
  }),
  right: Type.String({
    title: 'Right'
  }),
  top: Type.String({
    title: 'Top'
  }),
  bottom: Type.String({
    title: 'Bottom'
  }),
  containLabel: Type.Boolean({
    title: 'Should Contain Label'
  })
};

export const AxisSchema = {
  name: Type.String({
    title: 'Name'
  }),
  nameLocation: StringUnion(['end', 'start', 'center'], {
    title: 'Name Location'
  }),
  type: StringUnion(['value', 'category'], {
    title: 'Type'
  }),
  offset: Type.Number({
    title: 'Offset'
  }),
  data: Type.Array(Type.String(), {
    title: 'Data'
  })
};

export const TooltipSchema = {
  trigger: StringUnion(['axis', 'item', 'none'], {
    title: 'Trigger'
  }),
  triggerOn: StringUnion(['mousemove', 'click', 'mousemove|click', 'none'], {
    title: 'Trigger Way'
  })
};

export const LegendSchema = {
  show: Type.Boolean({
    title: 'Show'
  }),
  data: Type.Array(Type.String(), {
    title: 'Data'
  }),
  icon: StringUnion(['auto', 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'], {
    title: 'Icon'
  }),
  type: StringUnion(['plain', 'scroll'], {
    title: 'Type'
  }),
  left: Type.String({
    title: 'Left'
  }),
  right: Type.String({
    title: 'Right'
  }),
  top: Type.String({
    title: 'Top'
  }),
  bottom: Type.String({
    title: 'Bottom'
  })
};

export const SeriesLabelSchema = {
  show: Type.Boolean(),
  position: StringUnion([
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
  ], {
    title: 'Position'
  })
};

export const SeriesSchema = {
  name: Type.String({
    title: 'Name'
  }),
  label: Type.Object(SeriesLabelSchema, {
    title: 'Label'
  }),
  data: Type.Array(Type.Number(), {
    title: 'Data'
  })
};

export const ComponentPropsSchema = {
  notMerge: Type.Boolean({
    title: 'Not Merge Option',
    category: 'Basic'
  }),
  lazyUpdate: Type.Boolean({
    title: 'Enable Lazy Update',
    category: 'Basic'
  }),
  showLoading: Type.Boolean({
    title: 'Loading',
    category: 'Basic'
  })
};

export const BaseChartSchema = {
  ...ComponentPropsSchema,
  title: Type.Object(TitleSchema, {
    category: 'Title'
  }),
  grid: Type.Object(GridSchema, {
    category: 'Grid'
  }),
  xAxis: Type.Array(Type.Object({
    ...AxisSchema,
    position: StringUnion(['bottom', 'top'], {
      title: 'Position'
    })
  }), {
    category: 'XAxis'
  }),
  yAxis: Type.Array(Type.Object({
    ...AxisSchema,
    position: StringUnion(['left', 'right'], {
      title: 'Position'
    })
  }), {
    category: 'YAxis'
  }),
  tooltip: Type.Object(TooltipSchema, {
    category: 'Tooltip'
  }),
  legend: Type.Object(LegendSchema, {
    category: 'Legend'
  }),
  color: Type.Array(Type.String(), {
    category: 'Color'
  })
};

export const ChartPropsSchema = {
  ...BaseChartSchema,
  series: Type.Array(Type.Object({
    ...SeriesSchema,
    // line
    symbol: StringUnion(['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'], {
      title: 'Symbol'
    }),
    showSymbol: Type.Boolean({
      title: 'Show Symbol'
    }),
    smooth: Type.Boolean({
      title: 'Smooth'
    }),
    // bar
    barWidth: Type.String({
      title: 'Bar Width'
    }),
    barGap: Type.String({
      title: 'Bar Gap'
    }),
    barCategoryGap: Type.String({
      title: 'Bar Category Gap'
    }),
    stack: Type.String({
      title: 'Stack',
    }),
    // pie
    radius: Type.String({
      title: 'Radius'
    }),
    center: Type.Array(Type.String(), {
      title: 'Center'
    })
  }))
};
