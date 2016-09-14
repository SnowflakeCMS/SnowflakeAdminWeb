import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth_service";
/**
 * Created by Shane Yao on 2016/9/13.
 */

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth_service_:AuthService,  private router_:Router)
  {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {

    if (this.auth_service_.isLoginSuccesed) {
      return true;
    }
    else {
      this.router_.navigate(["login"]);
      return false;
    }
  }
}