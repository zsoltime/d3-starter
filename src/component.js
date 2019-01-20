const addBackground = (selection, { height, width }) => {
  const background = selection.selectAll('rect').data([null]);

  background
    .enter()
    .append('rect')
    .attr('fill', '#edf6f0')
    .merge(background)
    .attr('height', height)
    .attr('width', width);
};

const addText = (selection, { height, width }) => {
  const text = selection.selectAll('text').data([null]);

  text
    .enter()
    .append('text')
    .text('D3.js Starter')
    .attr('alignment-baseline', 'middle')
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

  addBackground(svgMerged, props);
  addText(svgMerged, props);
};

export default component;
