/**
 * Created by Shane Yao on 2016/9/29.
 */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {Entry} from "./entry";
import {Routes, RouterModule} from "@angular/router";

const routes:Routes = [
  {
    path: "",
    component: Entry,
  },
];

const EntryRouting:ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [EntryRouting],
  declarations: [Entry],
})

export class EntryModule {

}