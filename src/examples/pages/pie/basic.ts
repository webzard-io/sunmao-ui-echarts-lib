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
        id: 'pie1',
        type: 'echarts/v1/pie',
        properties: {
          className: '',
          title: {
            text: 'Pie'
          },
          grid: {},
          tooltip: {
            trigger: 'item'
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
                {
                  name: 'A',
                  value: 1
                },
                {
                  name: 'B',
                  value: 2
                }
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
