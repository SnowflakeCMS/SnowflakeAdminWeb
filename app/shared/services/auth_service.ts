/**
 * Created by zhish on 2016/8/2.
 */

import {Injectable} from "@angular/core";
import {APIService} from "./api_service";

@Injectable()
export class AuthService {
  private api_:APIService;
  private method_ = "auth";
  constructor(api:APIService)
  {
    this.api_ = api;
  }
  public login(user:string, pwd:string)
  {
    var params = {
      "username": user,
      "password": pwd,
    };
    this.api_.doPost(this.method_, params).subscribe();
  }
}