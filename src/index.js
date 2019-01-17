import { select } from 'd3';
import 'styles';

const addText = (selection, { height, width }) => {
  const text = selection.selectAll('text').data([null]);

  text
    .enter()
    .append('text')
    .text('D3.js Starter')
    .attr('alignment-baseline', 'middle')
    .attr('fill', 'rgba(0, 0, 0, 0.8)')
    .attr('text-anchor', 'middle')
    .style('font-size', '10vmin')
    .style('font-weight', '100')
    .merge(text)
    .attr('transform', `translate(${width / 2}, ${height / 2})`);
};

const component = (selection, props) => {
  const svg = selection.selectAll('svg').data([null]);

  const svgMerged = svg
    .enter()
    .append('svg')
    .merge(svg)
    .attr('height', props.height)
    .attr('width', props.width);

  addText(svgMerged, props);
};

const render = () => {
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;

  component(select('body'), { height, width });
};

window.addEventListener('load', () => {
  render();
});
