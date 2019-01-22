import { select } from 'd3';

import component, { addBackground, addText } from './component';

describe('component', () => {
  const body = select('body');
  let svg = null;

  beforeEach(() => {
    svg = body.append('svg');
  });

  afterEach(() => {
    select('svg').remove();
  });

  describe('addBackground', () => {
    it('matches snapshot', () => {
      addBackground(svg, { height: 400, width: 600 });
      expect(svg._groups[0][0]).toMatchSnapshot();
    });
  });

  describe('addText', () => {
    it('matches snapshot', () => {
      addText(svg, { height: 400, width: 600 });

      expect(svg._groups[0][0]).toMatchSnapshot();
    });
  });

  describe('component', () => {
    it('matches snapshot', () => {
      component(body, { height: 400, width: 600 });

      expect(body._groups[0][0]).toMatchSnapshot();
    });
  });
});
