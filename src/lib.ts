import { Registry, SunmaoLib } from '@sunmao-ui/runtime';
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

type Component = Parameters<Registry['registerComponent']>[0];
type Trait = Parameters<Registry['registerTrait']>[0];
type Module = Parameters<Registry['registerModule']>[0];

export const components: Component[] = [Chart, Bar, Line, Pie];
export const traits: Trait[] = [];
export const modules: Module[] = [];

export const EChartsLib: SunmaoLib = {
  components,
  traits,
  modules,
};

export function install (registry: Registry) {
  components.forEach(c => registry.registerComponent(c));
  traits.forEach(t => registry.registerTrait(t));
  modules.forEach(m => registry.registerModule(m));
}
