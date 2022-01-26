import { Registry } from "@sunmao-ui/runtime/lib/services/registry";
import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
  PieChart
} from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DatasetComponent,
  SingleAxisComponent,
  AxisPointerComponent
} from 'echarts/components';
import {
  CanvasRenderer,
} from 'echarts/renderers';

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
  CanvasRenderer
]);

type Component = Parameters<Registry["registerComponent"]>[0];
type Trait = Parameters<Registry["registerTrait"]>[0];
type Module = Parameters<Registry["registerModule"]>[0];

export const components: Component[] = [
];
export const traits: Trait[] = [];
export const modules: Module[] = [];

export function install(registry: Registry) {
  components.forEach((c) => registry.registerComponent(c));
  traits.forEach((t) => registry.registerTrait(t));
  modules.forEach((m) => registry.registerModule(m));
}
