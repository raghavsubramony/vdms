import { Component } from '@angular/core';
import { AuthService } from '../../_services/_services/auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'vm-registration',
  templateUrl: './RegistrationPage.component.html',
  styleUrls: ['./RegistrationPage.component.css']
})
export class RegistrationComponent {
  public error: any;
  constructor(private afService:AuthService , private router: Router) { }
	//registers the user and logs them in
  register(event, Firstname, Lastname, email, password) {
    event.preventDefault();
    this.afService.emailSignUp(email, password).then((user) => {
      
        this.router.navigate(['register']);
      })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }
}
