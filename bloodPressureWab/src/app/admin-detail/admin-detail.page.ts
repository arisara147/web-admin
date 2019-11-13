import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.page.html',
  styleUrls: ['./admin-detail.page.scss'],
})
export class AdminDetailPage implements OnInit {

  getStatus: any;
  getdata = {
    "getid":null
  };
  getid: any;
  statusMode: boolean;
  getadmin:any;
  isReadonly:boolean;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService) { 
    this.getid = this.activate.snapshot.paramMap.get('_id');
    this.getStatus = this.activate.snapshot.paramMap.get('_status');
    this.getdata.getid = this.getid;
    if (this.getStatus == "2") {
      this.isReadonly = false;
      console.log(this.isReadonly);
    }else if (this.getStatus == "1"){
      this.isReadonly = true;
      console.log(this.isReadonly);
    }
    console.log(this.getStatus);
    console.log(this.getid);
    this.getdataById(this.getdata);
    console.log(this.isReadonly);
  }

  ngOnInit() {
  }

  change(){
    console.log("readonly : "+ this.isReadonly);
    if (this.getStatus == "2") {
      this.isReadonly = true;
      this.getStatus = "1";
      console.log(this.isReadonly);
    }else if (this.getStatus == "1"){
      this.isReadonly = false
      this.getStatus = "2";
      console.log(this.isReadonly);
    }
  }

  getdataById(data){
    console.log(data);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(data));
    dataFrom.append("Function_Name", "getadminById");
    this.callapi.webadmin(dataFrom).then((it) => {
      this.getadmin = it[0];
      console.log(this.getadmin);
      
    });
  }

  editdata(){
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.getadmin));
    dataFrom.append("Function_Name", "updateAdmin");
    this.callapi.webadmin(dataFrom).then((it) => {
      this.change();
    });
  }

}
