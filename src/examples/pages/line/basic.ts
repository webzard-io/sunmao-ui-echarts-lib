import { Application } from '@sunmao-ui/core';

const basic: Application = {
  version: 'sunmao/v1',
  kind: 'Application',
  metadata: {
    name: 'some App'
  },
  spec: {
    components: [
      {
        id: 'line1',
        type: 'echarts/v1/line',
        properties: {
          className: '',
          title: {
            text: 'Line'
          },
          grid: {},
          xAxis: [
            {
              name: '',
              type: 'category',
              data: [
                'Dimension 1',
                'Dimension 2'
              ]
            }
          ],
          yAxis: [
            {
              name: '',
              type: 'value',
              data: []
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

export default basic;
