import type { RegistryInterface, SunmaoLib } from '@sunmao-ui/runtime';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DatasetComponent,
  SingleAxisComponent,
  AxisPointerComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { Chart } from './components/Chart';
import { Bar } from './components/Bar';
import { Line } from './components/Line';
import { Pie } from './components/Pie';

echarts.use([
  // chart
  BarChart,
  LineChart,
  PieChart,
  // component
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DatasetComponent,
  SingleAxisComponent,
  AxisPointerComponent,
  // renderer
  CanvasRenderer,
]);

export const components = [Chart, Bar, Line, Pie];
export const traits = [];
export const modules = [];

export const EChartsLib: SunmaoLib = {
  components,
  traits: [],
  modules: [],
};

export function install (registry: RegistryInterface) {
  components.forEach(c => registry.registerComponent(c));
  traits.forEach(t => registry.registerTrait(t));
  modules.forEach(m => registry.registerModule(m));
}
