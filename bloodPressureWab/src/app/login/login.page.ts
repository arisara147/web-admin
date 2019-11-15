import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  DataAdminLogin = {
    "admin_user": "",
    "admin_passwd": ""
  }

  DataLoginLog = {
    "login_username": null,
    "login_password": null,
    "login_name": null,
    "login_type": null
  }

  username: any;
  password: any;
  dataAdmin: any;

  constructor(
    public navCtrl: NavController,
    public callApi: CallapiService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  login() {
    this.DataAdminLogin.admin_user = this.username;
    this.DataAdminLogin.admin_passwd = this.password;

    let dataForm = new FormData();
    dataForm.append("_Data", JSON.stringify(this.DataAdminLogin));
    dataForm.append("Function_Name", "checkloginadmin");
    this.callApi.checklogin(dataForm).then((it) => {
      console.log(it);
      this.dataAdmin = it[0];
      console.log(this.dataAdmin);

      if (this.dataAdmin.admin_user == this.username && this.dataAdmin.admin_passwd == this.password) {
        this.callApi.user = this.dataAdmin.admin_user;
        this.callApi.pwd = this.dataAdmin.admin_passwd;
        this.callApi.getStatus = "admin";
        this.callApi.getid = this.dataAdmin.admin_id;
        this.loginLog(this.callApi.user, this.callApi.pwd, this.dataAdmin.admin_name, this.callApi.getStatus);
        this.router.navigate(['/home']);
      } else {
        console.log('bye');
      }
    });
  }

  loginLog(username, password, name, type) {
    this.DataLoginLog.login_name = name;
    this.DataLoginLog.login_password = password;
    this.DataLoginLog.login_username = username;
    this.DataLoginLog.login_type = type;
    console.log(this.DataLoginLog);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.DataLoginLog));
    dataFrom.append("Function_Name", "AddloginLog");
    console.log(dataFrom);
    this.callApi.checklogin(dataFrom).then((res) => {
      console.log(res);

    });
  }

}
