import { select } from 'd3';
import 'styles';

import component from './component';

const render = () => {
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;

  component(select('body'), { height, width });
};

if (module.hot) {
  module.hot.accept('./component', render);
}

window.addEventListener('load', () => {
  render();

  window.addEventListener('resize', render);
});
