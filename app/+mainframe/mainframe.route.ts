/**
 * Created by Shane Yao on 2016/9/13.
 */


import {Routes, RouterModule} from "@angular/router";

import {MainFrame} from "./mainframe";
import {AuthGuard} from "../shared/services/auth_guard";
import {ModuleWithProviders} from "@angular/core";

const routes:Routes = [
  {
    path: "main",
    component: MainFrame,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: "app/+dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "entry",
        loadChildren: "app/+entry/entry.module#EntryModule"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/main/dashboard",
    pathMatch: "prefix", //default
  },

];

export const MainFrameRouting:ModuleWithProviders = RouterModule.forChild(routes);


