import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }
  //return data from online json files
  GetStarwarsData():Observable<any>{
   return this.http.get('https://swapi.co/api/people/?format=json');
  }
  GetStarwarsPlanetData():Observable<any>{
    return this.http.get('https://swapi.co/api/planets/?format=json');
   }
  GetStarwarsShipData():Observable<any>{
    return this.http.get('https://swapi.co/api/starships/?format=json');
   }
}
