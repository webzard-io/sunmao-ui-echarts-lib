import { Type } from '@sinclair/typebox';
import { BaseChartSpec, SeriesSpec, BarSpecObject } from './Chart';

export const BarPropsSpec = {
  ...BaseChartSpec,
  series: Type.Array(
    Type.Object({
      ...SeriesSpec,
      ...BarSpecObject
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
