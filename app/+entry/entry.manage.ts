/**
 * Created by Shane Yao on 2016/10/11.
 */

import {Component, OnInit} from "@angular/core";
import {LoggingService} from "../shared/services/logging_service";
import {EntryService, IEntry} from "../shared/services/entry_service";

@Component({
  moduleId: module.id,
  selector: "cf2-entry-manage",
  templateUrl: "entry.manage.tpl.html",
  styleUrls: []
})

export class EntryManage implements OnInit
{
  private model:IEntry[] = null;
  constructor(private entry_service_:EntryService, private logger_:LoggingService)
  {

  }

  ngOnInit(): void
  {
    this.entry_service_.getEntryList().subscribe(
      entryList => {
        return this.handleEntryList(entryList);
      },
      error => {
        return this.handleEntryListError(error);
      }
    )
  }

  private handleEntryListError(error: any) {
    this.logger_.error("handleEntryListError", error);
  }

  private handleEntryList(entryList: IEntry[]) {
    this.logger_.debug("----------------handleEntryList", entryList);
    this.model = entryList;
  }
}