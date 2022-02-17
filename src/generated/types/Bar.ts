import { Type } from '@sinclair/typebox';
import { StringUnion } from '../../sunmao-helper';
import { BaseChartSchema, SeriesSchema } from './Chart';

export const BarPropsSchema = {
  ...BaseChartSchema,
  series: Type.Array(
    Type.Object({
      ...SeriesSchema,
      stack: Type.String({
        title: 'Stack'
      }),
      barWidth: Type.String({
        title: 'Bar Width'
      }),
      barGap: Type.String({
        title: 'Bar Gap'
      }),
      barCategoryGap: Type.String({
        title: 'Bar Category Gap'
      }),
      showBackground: Type.Boolean({
        title: 'Show Background'
      }),
    }), {
      title: 'Series',
      category: 'Series'
    }
  ),
};
