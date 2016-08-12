/**
 * Created by Shane Yao on 2016/7/18.
 */

import {Component, Output, EventEmitter} from "@angular/core";
import {NgForm} from "@angular/forms";

import {LoginObject} from "./login.obj";
import {AuthService} from "../shared/services/auth_service";

@Component({
  moduleId: module.id,
  selector: "login-form",
  templateUrl: "login.form.tpl.html",
  providers: [AuthService],
  styleUrls: ["login.form.css"]
})

export class LoginForm {
  private auth_:AuthService;
  model = new LoginObject("", "");
  submitted = false;

  constructor(auth:AuthService)
  {
    this.auth_ = auth;
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
    console.log("------------onLoginResult", result, token);
  }
}