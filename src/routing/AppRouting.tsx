import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '../components/ErrorFallback/ErrorFallback.tsx';

import { routes } from './routes.tsx';

export const AppRouting = () => (
  <Routes>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>Loading...</div>}>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Suspense>
    </ErrorBoundary>
  </Routes>
);
