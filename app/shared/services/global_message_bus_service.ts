/**
 * Created by Shane on 2016/8/13.
 */
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

type LoginCallback = (t:string)=>any;

@Injectable()
export class GlobalMessageBusService
{
  private loginSource_ = new Subject<string>();
  private loginSource$_ = this.loginSource_.asObservable();

  public loginComplete(token:string)
  {
    this.loginSource_.next(token);
  }

  public subscribeLoginComplete(f:LoginCallback)
  {
    this.loginSource$_.subscribe(
      t => f(t)
    )
  }
}