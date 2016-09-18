/**
 * Created by Shane Yao on 2016/9/13.
 */


import {Routes, RouterModule} from "@angular/router";

import {MainFrame} from "./mainframe";
import {AuthGuard} from "../shared/services/auth_guard";
import {ModuleWithProviders} from "@angular/core";

const routes:Routes = [
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "prefix", //default
  },
  {
    path: "main",
    component: MainFrame,
    canActivate: [AuthGuard],
  }
];

export const MainFrameRouting:ModuleWithProviders = RouterModule.forChild(routes);


