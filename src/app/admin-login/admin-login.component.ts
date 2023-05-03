import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  authenticate(user: string, pass: string){

    if(user == "greg" && pass == "greg" ){
      location.href = 'admin'
    }
  }
}
