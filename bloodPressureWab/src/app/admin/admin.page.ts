import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  getdata: any;
  status: string;
  dataDel = {
    "admin_id":null
  };

  constructor(public callapi:CallapiService, public router:Router) { }

  ngOnInit() {
    this.getAllAdmin();
  }

  ionViewDidEnter(){
    this.getAllAdmin();
  }

  getAllAdmin(){
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallAdmin");
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
    this.router.navigate(['/admin-detail', { _id: id, _status: this.status }]);
  }

  gotoEdit(id) {
    this.status = "2";
    this.router.navigate(['/admin-detail', { _id: id, _status: this.status }]);
  }

  delAdmin(id){
    this.dataDel.admin_id = id;
    console.log(this.dataDel.admin_id);  
      let dataFrom = new FormData();
      dataFrom.append("_Data", JSON.stringify(this.dataDel));
      dataFrom.append("Function_Name", "deleteAdmin");
      this.callapi.webadmin(dataFrom).then((it) =>{
        console.log(it);
        this.getAllAdmin();
      });
  }

}
