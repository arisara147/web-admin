import { Component } from '@angular/core';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  getData: any;

  constructor(public callapi: CallapiService) { }

  ngOnInit() {
    this.getAllLogin();
  }

  getAllLogin() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallLogin");
    this.callapi.webadmin(dataFrom).then((result) => {
      this.getData = result;
      console.log(result);
      console.log(this.getData);
    });
  }

}
