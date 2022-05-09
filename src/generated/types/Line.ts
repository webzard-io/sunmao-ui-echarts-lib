import { Type } from '@sinclair/typebox';
import { BaseChartSpec, SeriesSpec, LineSpecObject } from './Chart';

export const LinePropsSpec = {
  ...BaseChartSpec,
  series: Type.Array(
    Type.Object({
      ...SeriesSpec,
      ...LineSpecObject,
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
