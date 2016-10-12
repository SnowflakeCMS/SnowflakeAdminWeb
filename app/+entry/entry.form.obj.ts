/**
 * Created by Shane Yao on 2016/9/29.
 */

// 内容对象
export class EntryFormObject {
  constructor(public title:string = "",
              public slug:string = "",
              public content:string = "")
  {

  }

  public reset():void {
    this.title = "";
    this.slug = "";
    this.content = "";
  }
}