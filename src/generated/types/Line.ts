import { Type } from '@sinclair/typebox';
import { BaseChartSchema, SeriesSchema, LineSchemaObject } from './Chart';

export const LinePropsSchema = {
  ...BaseChartSchema,
  series: Type.Array(
    Type.Object({
      ...SeriesSchema,
      ...LineSchemaObject,
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
