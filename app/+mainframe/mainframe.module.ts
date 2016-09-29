/**
 * Created by Shane Yao on 2016/9/20.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MainFrame} from "./mainframe";
import {MainFrameRouting} from "./mainframe.route";

@NgModule({
  imports: [BrowserModule, MainFrameRouting],
  declarations: [MainFrame],
})

export class MainFrameModule {

}