import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PostvalueService {

  constructor(private http:HttpClient) { }

  getStateData():Observable<any>{
    return this.http.get("https://api.covid19india.org/data.json");
  }
  getData():Observable<any>{
    return this.http.get("https://covid19.mathdro.id/api/countries/india");
  }
  register(data):Observable<any>{
    return this.http.post("https://zen-user-api.herokuapp.com/users/register",data);
  }
  getDistrictData():Observable<any>{
    return this.http.get("https://api.covid19india.org/state_district_wise.json");
  }
  getBarData():Observable<any>{
    return this.http.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise");
  }
  getToken(data):Observable<any>{
    return this.http.post("https://zen-user-api.herokuapp.com/users/authenticate",data);
  }
}
