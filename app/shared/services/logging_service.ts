/**
 * Created by Shane Yao on 2016/8/12.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {

  public debug(...args:Array<any>)
  {
    console.log.apply(null, args);
  }
  public info(...args:Array<any>)
  {
    console.log.apply(null, args);
  }
  public error(...args:Array<any>)
  {
    console.log.apply(null, args);
  }

}