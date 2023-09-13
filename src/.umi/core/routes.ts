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
        "path": "/404Page",
        "exact": true,
        "component": require('@/pages/404Page/index.tsx').default
      },
      {
        "path": "/assessment",
        "exact": true,
        "component": require('@/pages/assessment/index.tsx').default
      },
      {
        "path": "/attendance",
        "exact": true,
        "component": require('@/pages/attendance/index.tsx').default
      },
      {
        "path": "/attendanceInfo",
        "exact": true,
        "component": require('@/pages/attendanceInfo/index.tsx').default
      },
      {
        "path": "/dashboard",
        "exact": true,
        "component": require('@/pages/dashboard/index.tsx').default
      },
      {
        "path": "/department",
        "exact": true,
        "component": require('@/pages/department/index.tsx').default
      },
      {
        "path": "/level",
        "exact": true,
        "component": require('@/pages/level/index.tsx').default
      },
      {
        "path": "/rewardRecord",
        "exact": true,
        "component": require('@/pages/rewardRecord/index.tsx').default
      },
      {
        "path": "/salary",
        "exact": true,
        "component": require('@/pages/salary/index.tsx').default
      },
      {
        "path": "/staff",
        "exact": true,
        "component": require('@/pages/staff/index.tsx').default
      },
      {
        "path": "/users/forgetPassword",
        "exact": true,
        "component": require('@/pages/users/forgetPassword.tsx').default
      },
      {
        "path": "/users/login",
        "exact": true,
        "component": require('@/pages/users/login.tsx').default
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
