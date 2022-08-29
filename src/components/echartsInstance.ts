export let echartsInstance: any | null = null;

export async function initEchartsInstance() {
  const {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    DatasetComponent,
    SingleAxisComponent,
    AxisPointerComponent,
  } = await import('echarts/components');
  const { BarChart, LineChart, PieChart } = await import('echarts/charts');
  const { CanvasRenderer } = await import('echarts/renderers');
  const core = await import('echarts/core');

  core.use([
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

  echartsInstance = core;
  return echartsInstance;
}
