import type { RegistryInterface, SunmaoLib } from '@sunmao-ui/runtime';
import { Chart } from './components/Chart';
import { Bar } from './components/Bar';
import { Line } from './components/Line';
import { Pie } from './components/Pie';

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
