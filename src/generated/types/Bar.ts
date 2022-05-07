import { Type } from '@sinclair/typebox';
import { BaseChartSchema, SeriesSchema, BarSchemaObject } from './Chart';

export const BarPropsSchema = {
  ...BaseChartSchema,
  series: Type.Array(
    Type.Object({
      ...SeriesSchema,
      ...BarSchemaObject
    }), {
      title: 'Series',
      category: 'Series',
      widget: 'core/v1/array',
      widgetOptions: {
        displayedKeys: ['name']
      }
    }
  ),
};
