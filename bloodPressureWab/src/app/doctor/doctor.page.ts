import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { AlertController, ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  getdata:any;
  datadoctor:any[] =[];
  doctorFilter:any;

  constructor(public callapi:CallapiService, public modalController: ModalController) { }

  ngOnInit() {
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
      for (const key in this.getdata) {
          this.datadoctor[key] = this.getdata[key];
      }
      console.log(this.datadoctor);
    });
    
  }

  async presentAlertPrompt(id) {
    this.doctorFilter = this.datadoctor.find(it => it.dr_id == id);
    console.log(this.doctorFilter);
   
  }

}
