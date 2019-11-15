import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

let apiUrl = "http://localhost:80/blood-pressure-api/";

@Injectable({
  providedIn: 'root'
})
export class CallapiService {
  public getStatus: any;
  public getid: any;
  public user;
  public pwd;
  constructor(public http: HttpClient) { }

  webadmin(_obj) {
    console.log(_obj);
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'web.php', _obj)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  checklogin(_obj) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'web.php', _obj).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

}
