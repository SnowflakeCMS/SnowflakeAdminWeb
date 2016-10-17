/**
 * Created by Shane Yao on 2016/9/19.
 */


import {HttpModule} from "@angular/http";
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {LoggingService} from "./services/logging_service";
import {APIService} from "./services/api_service";
import {DebugService} from "./services/debug_service";
import {GlobalMessageBusService} from "./services/global_message_bus_service";
import {AuthService} from "./services/auth_service";
import {AuthGuard} from "./services/auth_guard";
import {Message} from "./components/message/message";
import {EntryService} from "./services/entry_service";
import {SemUIDropdown} from "./components/semanticui/index";


@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [DebugService, LoggingService, GlobalMessageBusService, APIService, AuthService, AuthGuard, EntryService],
  declarations: [Message, SemUIDropdown],
  exports: [Message, SemUIDropdown],
})

export class SharedModule {
}