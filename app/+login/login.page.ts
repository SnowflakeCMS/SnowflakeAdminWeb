/**
 * Created by Shane Yao on 2016/7/18.
 */

import {Component} from "@angular/core";
import {LoginForm} from "./login.form";
import {AuthService} from "../shared/services/auth_service";

@Component({
  selector: "cf2-pages-login",
  template: "<login-form></login-form>",
  providers: [AuthService],
})

export class LoginPage {

}
