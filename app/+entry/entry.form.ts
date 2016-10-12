/**
 * Created by Shane Yao on 2016/9/29.
 */
import {Component, OnInit} from "@angular/core";
import {LoggingService} from "../shared/services/logging_service";
import {EntryService, IEntryBody, IEntry} from "../shared/services/entry_service";
import {EntryFormObject} from "./entry.form.obj";

@Component({
  moduleId: module.id,
  selector: "cf2-entry-form",
  templateUrl: "entry.form.tpl.html",
  styleUrls: []
})

export class EntryForm implements OnInit
{
  private model:EntryFormObject = new EntryFormObject();
  constructor(private entry_service_:EntryService, private logger_:LoggingService)
  {
  }

  public onSubmit()
  {
    let entryBody:IEntryBody = {
      "title": this.model.title,
      "slug": this.model.slug,
      "content": this.model.content,
    };

    this.logger_.debug("onSubmit", entryBody);
    this.entry_service_.newEntry(entryBody).subscribe(
      result => {
        return this.handleSubmitSuccess(result);
      },
      error => {
        return this.handleError(error);
      });
  }

  ngOnInit(): void
  {
    this.logger_.debug("ngOnInit entry");
  }

  private handleSubmitSuccess(result:IEntry)
  {
    this.logger_.debug("handleSubmitSuccess", result);
    this.model.reset();
  }
  private handleError(ff: any) {
    this.logger_.debug("-0------>ff:", ff);
  }
}