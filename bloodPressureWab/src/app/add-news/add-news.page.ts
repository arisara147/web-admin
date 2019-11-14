import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.page.html',
  styleUrls: ['./add-news.page.scss'],
})
export class AddNewsPage implements OnInit {

  datanews = {
    "news_id": null,
    "news_name": null,
    "news_detail": null,
    "news_date": null
  }

  dd: any;
  mm: any;
  yyyy: any;

  constructor(public callapi: CallapiService) { }

  ngOnInit() {
    this.getDate();
  }

  addNews() {
    console.log(this.datanews);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.datanews));
    dataFrom.append("Function_Name", "addNews");
    this.callapi.webadmin(dataFrom).then((it) => {

    });
  }

  getDate() {
    this.dd = new Date().getDate().toString();
    this.mm = new Date().getMonth().toString();
    this.yyyy = new Date().getFullYear().toString();
    this.datanews.news_date = this.yyyy + "-" + this.mm + "-" + this.dd;
    console.log(this.datanews.news_date);
  }

}
