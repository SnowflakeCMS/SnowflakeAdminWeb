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

  private method_:string = "auth";
  private token_:string = null;
  private complete_cb_:Function = null;
  constructor(private api_:APIService,
              private logger_:LoggingService)
  {
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

  public get isLoginSuccessed():boolean { return this.api_.getToken() != null; }
}