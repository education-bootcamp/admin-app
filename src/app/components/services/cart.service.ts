import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CartService {

   utilityUrl = environment.utilityUrl;

  constructor(private http:HttpClient) { }

  public loadData(page:any,size:any):Observable<any>{
    return this.http.get(this.utilityUrl+'cart/find-all?page='+page+'&size='+size)
  }
}
