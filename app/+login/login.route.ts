/**
 * Created by Shane Yao on 2016/7/18.
 */

import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginPage} from "./login.page"

const routing:Routes = [
  {
    path: "login",
    component: LoginPage,
  },
];

export const LoginRouting:ModuleWithProviders = RouterModule.forChild(routing);
