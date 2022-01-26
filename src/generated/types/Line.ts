import { Type } from "@sinclair/typebox";
import { StringUnion } from '../../sunmao-helper';
import {
  BaseChartSchema,
  SeriesSchema
} from './Chart';

export const LinePropsSchema = {
  ...BaseChartSchema,
  series: Type.Array(Type.Object({
    ...SeriesSchema,
    symbol: Type.Optional(StringUnion(['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'])),
    showSymbol: Type.Optional(Type.Boolean()),
    smooth: Type.Optional(Type.Boolean()),
  }))
};
