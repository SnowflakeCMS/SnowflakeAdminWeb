/**
 * Created by Shane on 2016/5/29.
 */
import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";

import {MainApp} from "./app.component";
import {appRouterProviders} from "./app.routes";
import {disableDeprecatedForms, provideForms} from "@angular/forms"
import {APIService} from "./shared/services/api_service";
import {LoggingService} from "./shared/services/logging_service";


bootstrap(MainApp, [
  disableDeprecatedForms(),
  provideForms(),
  [appRouterProviders, HTTP_PROVIDERS, APIService, LoggingService]
]).catch((err:any) => console.error(err));


