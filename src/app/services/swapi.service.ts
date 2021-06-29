import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {
  }

  getByUrl(url:string) {
    return this.http.get<any>(url);
  };

  getVehicles(page = '1') {
    const reqParams = new HttpParams()
      .set('page', page);
    return this.http.get<any>(`vehicles`, {params: reqParams});
  };

  getPlanets(page = '1') {
    const reqParams = new HttpParams()
      .set('page', page);
    return this.http.get<any>(`planets`, {params: reqParams});
  };

}
