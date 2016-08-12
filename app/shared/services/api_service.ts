/**
 * Created by zhish on 2016/8/2.
 */

import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, RequestMethod, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import '../rxjs-operators';
import {LoggingService} from "./logging_service";
import {ServerRetCode} from "../server_return_code";



export interface IAPIResult {
  code:ServerRetCode;
  msg:string;
  ret:Object;
}

@Injectable()
export class APIService {
  private token_:string;
  private host_:string;
  private port_:string;
  private ver_:string;
  private scheme:string;
  private url_:string;
  private http_:Http;
  private logger_:LoggingService;

  constructor(http:Http, logger:LoggingService)
  {
    this.token_ = null;
    this.host_ = "localhost";
    this.port_ = "5000"
    this.ver_ = "";
    this.scheme = "http";
    this.url_ = this.scheme + "://" + this.host_ + ":" + this.port_ + "/api/";
    this.http_ = http;
    this.logger_ = logger;
  }

  public doPost(method:string, params:Object, need_authorized:boolean = false)
  {
    if (need_authorized && this.token_ === null) {
      // TODO raise error
      return;
    }

    let body = JSON.stringify(params);
    let full_url = this.url_ + method;

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    options.method = RequestMethod.Post;
    return this.http_.post(full_url, body, options)
      .map(resp => this.extractData(resp))
      .catch(error => this.handleError(error));
  }

  private extractData(res: Response) {
    this.logger_.debug("--------------->resp", res);
    if (!res.ok) {
      this.logger_.error("Request not return ok");
      // TODO return correct values
      return;
    }

    let resp_json = null;
    try {
      resp_json = res.json();
    }
    catch (e) {
      this.logger_.error("Convert data to JSON object failed, msg:", (Error)(e.message));
      // TODO Return values
      return;
    }

    this.logger_.debug("Content json object:", resp_json);
    let ret = resp_json["ret"];
    let msg = resp_json["msg"];
    let code = resp_json["code"];
    let result:IAPIResult = {
      code: code,
      msg: msg,
      ret: ret,
    };
    return result;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  public setToken(token:string) {
    this.logger_.debug("-----------setToken:", token);
    this.token_ = token;
  }
}