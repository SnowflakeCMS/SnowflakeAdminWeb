/**
 * Created by Shane Yao on 2016/10/10.
 */
import {Injectable} from "@angular/core";
import {APIService, IAPIResult} from "./api_service";
import {LoggingService} from "./logging_service";
import {Observable} from "rxjs/Observable";
import '../rxjs-operators';

export interface IEntryBody {
  title: string;
  slug: string;
  content: string;
};

export interface IEntry {
  id: number;
  uuid: string;
  body: IEntryBody;
};


@Injectable()
export class EntryService {
  private resource:string = "entry";

  constructor(private api_:APIService,
              private logger_:LoggingService)
  {
  }

  public delEntry(id:string):Observable<IEntry>
  {
    this.logger_.debug("Del entry, id", id)

    return this.api_.doDelete(this.resource + "/" + id, null, false)
      .map(result => this.handleNewEntryResult(result));
  }
  public newEntry(entry:IEntryBody):Observable<IEntry>
  {
    this.logger_.debug("EntryForm content:", entry)
    return this.api_.doPost(this.resource, entry, false)
      .map(result=> this.handleNewEntryResult(result));
  }
  public getEntryList():Observable<IEntry[]>
  {
    return this.api_.doGet(this.resource, null, false)
      .map(result => this.extractEntryList(result));
  }

  private extractEntryList(result:IAPIResult):IEntry[]
  {
    // TODO
    if (result.code != 0) {
      throw Error("sdf");
    }

    let entryList = new Array<IEntry>();
    for (let entryObj of <Array<Object>>(result.ret)) {
      entryList.push(<IEntry>(entryObj));
    }
    return entryList;
  }

  private handleNewEntryResult(result: IAPIResult):IEntry
  {
    // TODO
    if (result.code != 0) {
      throw Error("sdf");
    }
    let entryFromServer:IEntry = <IEntry>(result.ret);
    this.logger_.debug("-------------------_>handleNewEntryResult", entryFromServer);
    return entryFromServer
  }
}