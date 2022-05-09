import { Type } from '@sinclair/typebox';
import {
  TitleSpec,
  GridSpec,
  TooltipSpec,
  LegendSpec,
  SeriesSpec,
  ComponentPropsSpec,
  PieSpecObject,
} from './Chart';

export const PiePropsSpec = {
  ...ComponentPropsSpec,
  title: Type.Object(TitleSpec, {
    category: 'Title',
  }),
  grid: Type.Object(GridSpec, {
    category: 'Grid',
  }),
  tooltip: Type.Object(TooltipSpec, {
    category: 'Tooltip',
  }),
  legend: Type.Object(LegendSpec, {
    category: 'Legend',
  }),
  color: Type.Optional(
    Type.Array(Type.String(), {
      category: 'Color',
    })
  ),
  series: Type.Array(
    Type.Object({
      ...SeriesSpec,
      ...PieSpecObject,
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
