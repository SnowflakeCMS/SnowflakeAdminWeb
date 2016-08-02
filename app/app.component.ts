/**
 * Created by Shane on 2016/5/29.
 */
import {Component, Directive, ElementRef, Input, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import './shared/rxjs-operators';
import {LoginPage} from "./+login/index";
import {AppObject} from "./app.obj";

@Component({
  moduleId: module.id,
  selector: "cf2-app",
  templateUrl: "app.tpl.html",
  precompile: [LoginPage],
  directives: [ROUTER_DIRECTIVES],
})

export class MainApp implements OnInit {
  model = new AppObject();

  ngOnInit():any {
    console.log("------------------>MainOnInit")
    return undefined;
  }

  title = "cfblog2 Admin";
}



