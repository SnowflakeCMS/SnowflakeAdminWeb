/**
 * Created by Shane Yao on 2016/10/11.
 */

import {Component, OnInit} from "@angular/core";
import {LoggingService} from "../shared/services/logging_service";
import {EntryService, IEntry} from "../shared/services/entry_service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "cf2-entry-manage",
  templateUrl: "entry.manage.tpl.html",
  styleUrls: []
})

export class EntryManage implements OnInit
{
  private model:IEntry[] = null;
  constructor(private router_:Router, private route_: ActivatedRoute,
              private entry_service_:EntryService, private logger_:LoggingService)
  {

  }

  public onNewEntry()
  {
    this.router_.navigate(["new"], {relativeTo: this.route_});
  }

  public deleteEntry(id:string)
  {
    this.entry_service_.delEntry(id).subscribe(
      deletedEntry => {
        return this.handleDeleteSuccess(parseInt(id));
      },
      error => {
        return this.handleDeleteFailed(error);
      }
    );
    this.logger_.debug("----------deleteEntry", id);

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

  private handleDeleteSuccess(deletedId: number) {
    let index = this.model.findIndex(_entry => _entry.id == deletedId);
    this.model.splice(index, 1);
    this.logger_.debug("------------", this.model);
  }

  private handleDeleteFailed(error: any) {
    
  }
}