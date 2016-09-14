/**
 * Created by Shane Yao on 2016/7/27.
 */

import {provideRouter, RouterConfig} from "@angular/router";
import {LoginRoute} from "./+login/index";
import {MainFrameRoute} from "./+mainframe/index";

const routes:RouterConfig = [
  ...LoginRoute, ...MainFrameRoute,
]

export const appRouterProviders = [
  provideRouter(routes)
];


