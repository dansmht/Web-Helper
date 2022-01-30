import { FC } from 'react';

import { IconType } from './icon.types';

export type Technology = {
  name: string,
  path: string,
  icon: IconType,
  element: FC,
  subsections: Omit<Technology, 'subsections'>[],
};
