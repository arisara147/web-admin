import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  getsection: any;
  checkstatus: any;
  addData = {
    "id": null,
    "article": null,
    "name": null,
    "sex": null,
    "user": null,
    "passwd": null,
    "tell": null,
    "address": null,
    "birthdate": null,
    "weight": null,
    "height": null,
  };


  constructor(public callapi: CallapiService) { }

  ngOnInit() {
  }


  checkValue(event) {
    console.log(event.detail.value)
    this.getsection = event.detail.value;
    console.log(this.getsection);
    if (this.getsection != "patient") {
      this.checkstatus = 1;
    } else {
      this.checkstatus = 2;
    }
  }

  donedata() {
    console.log(this.getsection);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.addData));

    if (this.getsection == "patient") {
      this.splitDate();
      console.log(this.addData);
      dataFrom.append("Function_Name", "addPatient");
      this.callapi.webadmin(dataFrom).then((it) => {

      });

    } else if (this.getsection == "doctor") {
      console.log(this.addData);
      dataFrom.append("Function_Name", "addDoctor");
      this.callapi.webadmin(dataFrom).then((it) => {

      });

    } else if (this.getsection == "nurse") {
      console.log(this.addData);
      dataFrom.append("Function_Name", "addNurse");
      this.callapi.webadmin(dataFrom).then((it) => {

      });

    } else if (this.getsection == "admin") {
      console.log(this.addData);
      dataFrom.append("Function_Name", "addAdmin");
      this.callapi.webadmin(dataFrom).then((it) => {

      });

    }
  }

  splitDate(){
    var date:string;
    date = this.addData.birthdate;
    var datesplit = date.split("T", 1);
    this.addData.birthdate = datesplit[0];
    console.log(this.addData.birthdate);
    
  }

}
