import { Type } from '@sinclair/typebox';
import {
  TitleSchema,
  GridSchema,
  TooltipSchema,
  LegendSchema,
  SeriesSchema,
  ComponentPropsSchema,
  PieSchemaObject,
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
  color: Type.Optional(
    Type.Array(Type.String(), {
      category: 'Color',
    })
  ),
  series: Type.Array(
    Type.Object({
      ...SeriesSchema,
      ...PieSchemaObject,
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
