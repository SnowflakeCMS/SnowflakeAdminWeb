/**
 * Created by Shane Yao on 2016/9/18.
 */

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainApp} from "./app.component";
import {MainAppRouting} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {LoginModule} from "./+login/login.module";

@NgModule({
  imports: [BrowserModule, FormsModule, MainAppRouting, LoginModule],
  declarations: [MainApp],
})
export class MainModule {
  ngDoBootstrap() {

  }
}