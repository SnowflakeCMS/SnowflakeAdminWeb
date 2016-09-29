/**
 * Created by Shane Yao on 2016/9/29.
 */

import {NgModule, ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Dashboard} from "./dashboard";

const routes:Routes = [
  {
    path: "",
    component: Dashboard,
  },
];

const DashboardRouting:ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [DashboardRouting],
  declarations: [Dashboard],
})


export class DashboardModule {

}