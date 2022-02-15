import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { initSunmaoUIEditor } from '@sunmao-ui/editor';
import '@sunmao-ui/editor/dist/esm/index.css';
import { EChartsLib } from './lib';

const { Editor } = initSunmaoUIEditor({
  libs: [EChartsLib],
  defaultApplication: {
    kind: 'Application',
    version: 'echarts/v1',
    metadata: {
      name: 'echarts',
    },
    spec: {
      components: [],
    },
  },
});

ReactDOM.render(
  <StrictMode>
    <Editor />
  </StrictMode>,
  document.getElementById('root')
);
