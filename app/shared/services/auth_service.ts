/**
 * Created by zhish on 2016/8/2.
 */

import {Injectable} from "@angular/core";
import {APIService, IAPIResult} from "./api_service";
import {LoggingService} from "./logging_service";

@Injectable()
export class AuthService {
  private api_:APIService;
  private method_ = "auth";
  private logger_:LoggingService;
  constructor(api:APIService, logger:LoggingService)
  {
    this.api_ = api;
    this.logger_ = logger;

  }
  public login(user:string, pwd:string)
  {
    var params = {
      "username": user,
      "password": pwd,
    };

    this.api_.doPost(this.method_, params).subscribe(r => this.onLoginDone(r));
  }

  public onLoginDone(result:IAPIResult)
  {
    this.logger_.debug("onLoginDone..........", result);
  }
}