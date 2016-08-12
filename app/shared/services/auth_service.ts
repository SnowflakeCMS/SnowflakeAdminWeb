/**
 * Created by zhish on 2016/8/2.
 */

import {Injectable} from "@angular/core";
import {APIService, IAPIResult} from "./api_service";
import {LoggingService} from "./logging_service";
import {ServerRetCode} from "../server_return_code";
import {assert} from "../debug"

@Injectable()
export class AuthService {
  private api_:APIService;
  private method_ = "auth";
  private logger_:LoggingService;
  private complete_cb_:Function = null;

  constructor(api:APIService, logger:LoggingService)
  {
    this.api_ = api;
    this.logger_ = logger;
    this.complete_cb_ = null;
  }

  public set completeCallback(cb:Function)
  {
    this.complete_cb_ = cb;
  }

  public login(user:string, pwd:string)
  {
    var params = {
      "username": user,
      "password": pwd,
    };

    this.api_.doPost(this.method_, params).subscribe(r => {
      this.handleResult(r)
    });
  }

  private handleResult(result:IAPIResult)
  {
    let is_success = true;
    let code = result.code;
    if (code != ServerRetCode.OK){
      // TODO 登陆失败
      is_success = false
      return this.complete_cb_(is_success);
    }

    let token = <string>(result.ret);
    assert(typeof token == "string", "Expect token is a string");
    this.api_.setToken(token);
    return this.complete_cb_(is_success, token);
  }
}