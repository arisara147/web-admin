import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { AlertController, ActionSheetController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  getdata: any;
  status: string;
  dataDel = {
    "dr_id":null
  };

  constructor(public callapi:CallapiService, public router:Router) { }

  ngOnInit() {
    this.getAllDoctor();
  }

  ionViewDidEnter(){
    this.getAllDoctor();
  }

  getAllDoctor(){
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallDoctor");
    this.callapi.webadmin(dataFrom).then((result)=>{
      this.getdata = result;
      console.log(result);
      console.log(this.getdata); 
      // for (const key in this.getdata) {
      //     this.datadoctor[key] = this.getdata[key];
      // }
      // console.log(this.datadoctor);
    });
  }

  gotoDetail(id) {
    this.status = "1";
    this.router.navigate(['/doctor-detail', { _id: id, _status: this.status }]);
  }

  gotoEdit(id) {
    this.status = "2";
    this.router.navigate(['/doctor-detail', { _id: id, _status: this.status }]);
  }

  delDoctor(id){
    this.dataDel.dr_id = id;
    console.log(this.dataDel.dr_id);  
      let dataFrom = new FormData();
      dataFrom.append("_Data", JSON.stringify(this.dataDel));
      dataFrom.append("Function_Name", "deleteDoctor");
      this.callapi.webadmin(dataFrom).then((it) =>{
        console.log(it);
        this.getAllDoctor();
      });
  }

  // async presentAlertPrompt(id) {
  //   this.doctorFilter = this.datadoctor.find(it => it.dr_id == id);
  //   console.log(this.doctorFilter);
   
  // }

}
