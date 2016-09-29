/**
 * Created by Shane Yao on 2016/7/18.
 */

// 登陆用户
export class LoginObject {
  constructor(public user:string,
              public pwd:string,
              public user_valid:boolean=true) {
  }

}