import { Type } from '@sinclair/typebox';
import { StringUnion } from '../../sunmao-helper';
import {
  TitleSchema,
  GridSchema,
  TooltipSchema,
  LegendSchema,
  SeriesSchema,
  ComponentPropsSchema,
  AxisSchema
} from './Chart';

export const PiePropsSchema = {
  ...ComponentPropsSchema,
  title: Type.Object(TitleSchema),
  grid: Type.Object(GridSchema),
  tooltip: Type.Object(TooltipSchema),
  legend: Type.Object(LegendSchema),
  color: Type.Optional(Type.Array(Type.String())),
  series: Type.Array(Type.Object({
    ...SeriesSchema,
    data: Type.Array(Type.Object({
      value: Type.Number(),
      name: Type.String()
    })),
    radius: Type.Optional(Type.Union([Type.Number(), Type.String()])),
    center: Type.Optional(Type.Array(Type.Union([Type.Number(), Type.String()])))
  })),
  xAxis: Type.Array(Type.Object({
    ...AxisSchema,
    position: Type.Optional(StringUnion(['bottom', 'top']))
  })),
  yAxis: Type.Array(Type.Object({
    ...AxisSchema,
    position: Type.Optional(StringUnion(['left', 'right']))
  }))
};
