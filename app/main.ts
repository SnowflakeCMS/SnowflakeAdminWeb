/**
 * Created by Shane on 2016/5/29.
 */
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MainModule} from "./app.module";
// import {HTTP_PROVIDERS} from "@angular/http";
//
// import {MainApp} from "./app.component";
// import {appRouterProviders} from "./app.routes";
// import {disableDeprecatedForms, provideForms} from "@angular/forms"
// import {APIService} from "./shared/services/api_service";
// import {LoggingService} from "./shared/services/logging_service";
// import {DebugService} from "./shared/services/debug_service";
// import {GlobalMessageBusService} from "./shared/services/global_message_bus_service";
// import {AuthService} from "./shared/services/auth_service";
// import {AuthGuard} from "./shared/services/auth_guard";

const platform = platformBrowserDynamic();

platform.bootstrapModule(MainModule).catch((err:any) => console.error(err));
