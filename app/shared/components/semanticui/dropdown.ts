/**
 * Created by Shane Yao on 2016/10/17.
 */
import {Directive, OnDestroy, OnInit, ElementRef} from "@angular/core";

declare var $: any

@Directive({
  selector: ".ui.dropdown"
})

export class SemUIDropdown implements OnInit, OnDestroy {

  constructor(private el: ElementRef) {
  }

  public ngOnInit() {
    console.log("-----------ngOnInit");
    $(this.el.nativeElement).dropdown();
  }

  public ngOnDestroy() {
    $(this.el.nativeElement).dropdown('destroy');
  }
}