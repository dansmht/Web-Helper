import { TechnologyReact } from '../../pages/Navigation/Technologies/TechnologyReact/TechnologyReact';
import { SubsectionRedux } from '../../pages/Navigation/Technologies/TechnologyReact/SubsectionRedux/SubsectionRedux';

import { Technology } from '../types/technology.types';

export const technologies: Technology[] = [{
  name: 'React',
  path: 'react',
  icon: 'system',
  element: TechnologyReact,
  subsections: [{
    name: 'redux',
    path: 'redux',
    icon: 'system',
    element: SubsectionRedux,
  }],
}, {
  name: 'JavaScript',
  path: 'javascript',
  icon: 'system',
  element: TechnologyReact,
  subsections: [{
    name: 'variable types',
    path: 'var_types',
    icon: 'system',
    element: SubsectionRedux,
  }],
}];
