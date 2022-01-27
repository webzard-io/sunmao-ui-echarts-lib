import { Application } from '@sunmao-ui/core';

const gap: Application = {
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
              ],
              stack: ''
            },
            {
              name: 'Series 2',
              data: [
                3,
                4
              ],
              stack: '',
              barGap: '-100%'
            }
          ]
        },
        traits: []
      }
    ]
  }
};

export default gap;
