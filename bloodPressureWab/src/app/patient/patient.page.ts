import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  getdata:any;

  constructor(public callapi:CallapiService) { }

  ngOnInit() {
    this.getAllPatient();
  }

  getAllPatient(){
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallPatient");
    this.callapi.webadmin(dataFrom).then((result)=>{
      this.getdata = result;
      console.log(result);
      console.log(this.getdata); 
    });
  }

}
