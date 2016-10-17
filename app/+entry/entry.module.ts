/**
 * Created by Shane Yao on 2016/9/29.
 */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {EntryForm} from "./entry.form";
import {EntryManage} from "./entry.manage";
import {SharedModule} from "../shared/shared_module";

const routes:Routes = [
  {
    path: "",
    component: EntryManage,
  },
  {
    path: "new",
    component: EntryForm,
  }
];

const EntryRouting:ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [CommonModule, FormsModule, EntryRouting, SharedModule],
  declarations: [EntryForm, EntryManage],
})


export class EntryModule {

}