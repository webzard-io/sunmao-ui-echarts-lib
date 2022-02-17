import { Type } from '@sinclair/typebox';
import {
  TitleSchema,
  GridSchema,
  TooltipSchema,
  LegendSchema,
  SeriesSchema,
  ComponentPropsSchema,
} from './Chart';

export const PiePropsSchema = {
  ...ComponentPropsSchema,
  title: Type.Object(TitleSchema, {
    category: 'Title',
  }),
  grid: Type.Object(GridSchema, {
    category: 'Grid',
  }),
  tooltip: Type.Object(TooltipSchema, {
    category: 'Tooltip',
  }),
  legend: Type.Object(LegendSchema, {
    category: 'Legend',
  }),
  color: Type.Optional(Type.Array(Type.String(), {
    category: 'Color',
  })),
  series: Type.Array(Type.Object({
    ...SeriesSchema,
    data: Type.Array(Type.Object({
      value: Type.Number(),
      name: Type.String()
    }), {
      title: 'Data'
    }),
    radius: Type.Optional(Type.Union([Type.Number(), Type.String()], {
      title: 'Radius'
    })),
    center: Type.Optional(Type.Array(Type.Union([Type.Number(), Type.String()]), {
      title: 'Center'
    }))
  }), {
    title: 'Series',
    category: 'Series'
  })
};
