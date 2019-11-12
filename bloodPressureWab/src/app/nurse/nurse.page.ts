import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.page.html',
  styleUrls: ['./nurse.page.scss'],
})
export class NursePage implements OnInit {

  getdata:any;

  constructor(public callapi:CallapiService) { }

  ngOnInit() {
    this.getAllNurse();
  }

  getAllNurse(){
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getallNurse");
    this.callapi.webadmin(dataFrom).then((result)=>{
      this.getdata = result;
      console.log(result);
      console.log(this.getdata); 
    });
  }

}
