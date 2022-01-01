import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, TestPage, DataPage } from 'Pages';
import { checkEnv } from 'Utils';

type RouteType = {
  title: string;
  path: string;
  element: JSX.Element;
};

const publicRoutes: RouteType[] = [
  { title: 'Home', path: '/', element: <HomePage /> },
  { title: 'Data', path: '/data', element: <DataPage /> },
  { title: 'About', path: '/about', element: <AboutPage /> },
];

const devRoutes: RouteType[] = [
  { title: 'Test', path: '/test', element: <TestPage /> },
];

export const routes: RouteType[] = checkEnv('development')
  ? publicRoutes.concat(...devRoutes)
  : publicRoutes;

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      {routes.map(({ path, element, title }) => (
        <Route key={title} path={path} element={element} />
      ))}
    </Routes>
  );
}
