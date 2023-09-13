// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'F:/Project/react-antdesign后台管理系统/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.tsx').default,
    "routes": [
      {
        "path": "/dashboard",
        "exact": true,
        "component": require('@/pages/dashboard/index.tsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.tsx').default
      },
      {
        "path": "/test",
        "exact": true,
        "component": require('@/pages/test.tsx').default
      },
      {
        "path": "/user/:id",
        "exact": true,
        "component": require('@/pages/user/[id].tsx').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
