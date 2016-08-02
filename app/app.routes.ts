/**
 * Created by Shane Yao on 2016/7/27.
 */

import {provideRouter, RouterConfig} from "@angular/router";
import {LoginRoute} from "./+login/index";

const routes:RouterConfig = [
  ...LoginRoute,
]

export const appRouterProviders = [
  provideRouter(routes)
];


