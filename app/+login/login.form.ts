/**
 * Created by Shane Yao on 2016/7/18.
 */

import {Component} from "@angular/core";
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

  constructor(private auth:AuthService)
  {
    this.auth_ = auth;
  }

  onSubmit() {
    console.log("---------------->");
    this.submitted = true;
    this.auth_.login(this.model.user, this.model.pwd)
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}