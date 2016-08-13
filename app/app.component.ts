/**
 * Created by Shane on 2016/5/29.
 */
import {Component, Directive, ElementRef, Input, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import './shared/rxjs-operators';
import {LoginPage} from "./+login/index";
import {AppObject} from "./app.obj";
import {GlobalMessageBusService} from "./shared/services/global_message_bus_service";

@Component({
  moduleId: module.id,
  selector: "cf2-app",
  templateUrl: "app.tpl.html",
  precompile: [LoginPage],
  directives: [ROUTER_DIRECTIVES],
})

export class MainApp implements OnInit {
  model = new AppObject();
  private gmb_:GlobalMessageBusService;
  constructor (gmb:GlobalMessageBusService)
  {
    this.gmb_ = gmb;
    gmb.subscribeLoginComplete(t => this.onLoginComplete(t))
  }

  private onLoginComplete(token:string)
  {
    console.log("------------->", "onLoginComplete", token);
  }

  public ngOnInit():any
  {
    return undefined;
  }

  title = "cfblog2 Admin";
}



