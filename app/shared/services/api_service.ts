/**
 * Created by zhish on 2016/8/2.
 */

import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, RequestMethod, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import '../rxjs-operators';


@Injectable()
export class APIService {
  private token_:string;
  private host_:string;
  private port_:string;
  private ver_:string;
  private scheme:string;
  private url_:string;
  private http_:Http;

  constructor(http:Http)
  {
    this.token_ = null;
    this.host_ = "localhost";
    this.port_ = "5000"
    this.ver_ = "";
    this.scheme = "http";
    this.url_ = this.scheme + "://" + this.host_ + ":" + this.port_ + "/api/";
    this.http_ = http;
  }

  public doPost(method:string, params:Object)
  {
    let body = JSON.stringify(params);
    let full_url = this.url_ + method;

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    options.method = RequestMethod.Post;
    return this.http_.post(full_url, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}