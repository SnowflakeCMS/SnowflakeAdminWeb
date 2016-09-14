/**
 * Created by Shane Yao on 2016/9/13.
 */


import {RouterConfig} from "@angular/router";

import {MainFrame} from "./mainframe";
import {AuthGuard} from "../shared/services/auth_guard";

export const MainFrameRoute:RouterConfig = [
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
