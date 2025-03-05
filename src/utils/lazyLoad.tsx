import { lazy, Suspense } from 'react';

import { findExportName } from './helpers.ts';

import type { FC, ReactNode } from 'react';

export const lazyLoad = <P extends Record<string, unknown>>(
  importPath: string,
  fallback: ReactNode = <div>Loading...</div>
): FC<P> => {
  const componentName = findExportName(importPath);

  if (!componentName) {
    throw new Error('Component name not found');
  }

  const Component = lazy(() =>
    import(importPath).then((module) => {
      if (!(componentName in module)) {
        throw new Error(`Export "${componentName}" not found in module`);
      }

      return {
        default: (module as Record<string, FC<P>>)[componentName],
      };
    })
  );

  return function (props: P) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
};
