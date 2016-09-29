import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth_service";
import {LoggingService} from "./logging_service";
/**
 * Created by Shane Yao on 2016/9/13.
 */

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth_service_:AuthService,  private router_:Router, private logger_:LoggingService)
  {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean
  {
    return true;
    // if (this.auth_service_.isLoginSuccessed) {
    //   return true;
    // }
    // else {
    //   this.router_.navigate(["/login"]);
    //   return false;
    // }
  }
}