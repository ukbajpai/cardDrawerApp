import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../baseService';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class DashBoardService extends BaseService{
    
    constructor(private http : HttpClient){
        super();
    }

    getNodeEntries(value : any) : Observable<any>{
        return this.http.get(this.SERVICE_URL.NODE_ENTRY + value);
    }
}