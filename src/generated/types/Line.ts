import { Type } from '@sinclair/typebox';
import { StringUnion } from '../../sunmao-helper';
import {
  BaseChartSchema,
  SeriesSchema
} from './Chart';

export const LinePropsSchema = {
  ...BaseChartSchema,
  series: Type.Array(Type.Object({
    ...SeriesSchema,
    symbol: StringUnion(['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'], {
      title: 'Symbol'
    }),
    showSymbol: Type.Boolean({
      title: 'Show Symbol'
    }),
    smooth: Type.Boolean({
      title: 'Smooth'
    }),
  }))
};
