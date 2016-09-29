/**
 * Created by Shane Yao on 2016/9/19.
 */


import {HttpModule} from "@angular/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {LoggingService} from "./services/logging_service";
import {APIService} from "./services/api_service";
import {DebugService} from "./services/debug_service";
import {GlobalMessageBusService} from "./services/global_message_bus_service";
import {AuthService} from "./services/auth_service";
import {AuthGuard} from "./services/auth_guard";
import {Message} from "./components/message/message";


@NgModule({
  imports: [HttpModule, BrowserModule],
  providers: [DebugService, LoggingService, GlobalMessageBusService, APIService, AuthService, AuthGuard],
  declarations: [Message],
  exports: [Message],
})

export class SharedModule {
}