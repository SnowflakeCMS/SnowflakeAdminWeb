/**
 * Created by zhish on 2016/8/12.
 */

export function assert(cond:any, message:string)
{
  if (!cond) {
    throw message;
  }
}