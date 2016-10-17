/**
 * Created by Shane Yao on 2016/9/29.
 */

import {NgModule, ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Dashboard} from "./dashboard";
import {SharedModule} from "../shared/shared_module";

const routes:Routes = [
  {
    path: "",
    component: Dashboard,
  },
];

const DashboardRouting:ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [SharedModule, DashboardRouting],
  declarations: [Dashboard],
})


export class DashboardModule {

}