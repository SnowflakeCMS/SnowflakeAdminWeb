/**
 * Created by Shane Yao on 2016/7/18.
 */

import {Component, Output, EventEmitter} from "@angular/core";
import {NgForm} from "@angular/forms";

import {LoginObject} from "./login.obj";
import {AuthService} from "../shared/services/auth_service";
import {GlobalMessageBusService} from "../shared/services/global_message_bus_service";

@Component({
  moduleId: module.id,
  selector: "cf2-login-form",
  templateUrl: "login.form.tpl.html",
  styleUrls: ["login.form.css"]
})

export class LoginForm {
  model = new LoginObject("", "");
  submitted = false;

  constructor(private auth_:AuthService, private gmb_:GlobalMessageBusService)
  {
    this.auth_.completeCallback = (r, t) => this.onLoginResult(r, t);
  }

  public onSubmit() {
    this.submitted = true;
    this.auth_.login(this.model.user, this.model.pwd);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  public onLoginResult(result:boolean, token:string = null)
  {
    if (!result) {
      return
    }
    this.gmb_.loginComplete(token);
  }
}