import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.page.html',
  styleUrls: ['./nurse.page.scss'],
})
export class NursePage implements OnInit {

  getdata: any;
  status: string;
  dataDel = {
    "nurse_id":null
  };

  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {
    this.getAllNurse();
  }

  ionViewDidEnter(){
    this.getAllNurse();
  }

  getAllNurse() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallNurse");
    this.callapi.webadmin(dataFrom).then((result) => {
      this.getdata = result;
      console.log(result);
      console.log(this.getdata);
    });
  }

  gotoDetail(id) {
    this.status = "1";
    this.router.navigate(['/nurse-detail', { _id: id, _status: this.status }]);
  }

  gotoEdit(id) {
    this.status = "2";
    this.router.navigate(['/nurse-detail', { _id: id, _status: this.status }]);
  }

  delNurse(id){
    this.dataDel.nurse_id = id;
    console.log(this.dataDel.nurse_id);  
      let dataFrom = new FormData();
      dataFrom.append("_Data", JSON.stringify(this.dataDel));
      dataFrom.append("Function_Name", "deleteNurse");
      this.callapi.webadmin(dataFrom).then((it) =>{
        console.log(it);
        this.getAllNurse();
      });
  }

}
