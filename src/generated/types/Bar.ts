import { Type } from "@sinclair/typebox";
import { StringUnion } from '../../sunmao-helper';
import {
  BaseChartSchema,
  SeriesSchema
} from './Chart';

export const BarPropsSchema = {
  ...BaseChartSchema,
  series: Type.Array(Type.Object({
    ...SeriesSchema,
    stack: Type.Optional(Type.String()),
    barWidth: Type.Optional(Type.String()),
    barGap: Type.Optional(Type.String()),
    barCategoryGap: Type.Optional(Type.String()),
    showBackground: Type.Optional(Type.Boolean()),
  })),
};
