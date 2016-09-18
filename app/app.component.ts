/**
 * Created by Shane on 2016/5/29.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import './shared/rxjs-operators';
import {AppObject} from "./app.obj";
import {GlobalMessageBusService} from "./shared/services/global_message_bus_service";
import {LoggingService} from "./shared/services/logging_service";

@Component({
  moduleId: module.id,
  selector: "cf2-app",
  templateUrl: "app.tpl.html",
})
export class MainApp implements OnInit {
  model = new AppObject();
  constructor (private gmb_:GlobalMessageBusService,
               private logger_:LoggingService,
               private router_:Router)
  {
    gmb_.subscribeLoginComplete(t => this.onLoginComplete(t))
  }

  private onLoginComplete(token:string)
  {
    this.router_.navigate(["main"]);
  }

  public ngOnInit():any
  {
    // TODO 检查本地token缓存
    return undefined;
  }

  title = "cfblog2 Admin";
}



