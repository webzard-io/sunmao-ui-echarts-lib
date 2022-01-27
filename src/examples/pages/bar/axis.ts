import { Application } from '@sunmao-ui/core';

const axis: Application = {
  version: 'sunmao/v1',
  kind: 'Application',
  metadata: {
    name: 'some App'
  },
  spec: {
    components: [
      {
        id: 'bar1',
        type: 'echarts/v1/bar',
        properties: {
          className: '',
          title: {
            text: 'Bar'
          },
          grid: {},
          xAxis: [
            {
              name: '',
              type: 'value',
              data: []
            }
          ],
          yAxis: [
            {
              name: '',
              type: 'category',
              data: [
                'Dimension 1',
                'Dimension 2'
              ]
            }
          ],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            show: true,
            data: []
          },
          color: [],
          series: [
            {
              name: 'Series 1',
              data: [
                1,
                2
              ]
            },
            {
              name: 'Series 2',
              data: [
                3,
                4
              ]
            }
          ]
        },
        traits: []
      }
    ]
  }
};

export default axis;
