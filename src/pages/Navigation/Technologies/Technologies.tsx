import { FC } from 'react';
import { Link } from 'react-router-dom';

import { technologies } from '../../../utils/constants/technologies.constants';

export const Technologies: FC = () => (
  <div>
    {technologies.map((tech) => (
      <Link key={tech.name} to={tech.path}>
        {tech.name}
      </Link>
    ))}
  </div>
);
