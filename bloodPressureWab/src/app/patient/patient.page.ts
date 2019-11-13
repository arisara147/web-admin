import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  getdata: any;
  status:string;
  dataDel = {
    "p_id":null
  };

  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {
    this.getAllPatient();
  }

  ionViewDidEnter(){
    this.getAllPatient();
  }

  getAllPatient() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallPatient");
    this.callapi.webadmin(dataFrom).then((result) => {
      this.getdata = result;
      console.log(result);
      console.log(this.getdata);
    });
  }

  gotoDetail(id) {
     this.status = "1";
    this.router.navigate(['/patient-detail', { _id: id , _status:this.status }]);
  }

  gotoEdit(id) {
    this.status = "2";
   this.router.navigate(['/patient-detail', { _id: id , _status:this.status }]);
 }

 deleteData(id){
  this.dataDel.p_id = id;
  console.log(this.dataDel.p_id);  
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.dataDel));
    dataFrom.append("Function_Name", "deletePatient");
    this.callapi.webadmin(dataFrom).then((it) =>{
      console.log(it);
      this.getAllPatient();
    });
 }  

}
