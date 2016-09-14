/**
 * Created by Shane Yao on 2016/9/13.
 */

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoggingService} from "../shared/services/logging_service";

@Component({
  moduleId: module.id,
  selector: "cf2-container",
  templateUrl: "mainframe.tpl.html",
})

export class MainFrame implements OnInit
{
  constructor(private router_:Router, private logger_:LoggingService)
  {
  }

  ngOnInit(): any
  {
    this.logger_.debug("------------->MainFrame");
    return undefined;
  }
}