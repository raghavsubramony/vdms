import { Component } from '@angular/core';
import { AuthService } from '../../_services/_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'vm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

public error: any;
  
  
    constructor(public authservice: AuthService, public router: Router) {

    }
    ngOnInit() {
    }

    signInWithGoogle(): void { 
        this.authservice.signInWithGoogle().then(() =>this.postSignIn());
    } 
private postSignIn(): void {
      this.router.navigate(['dashboard']);
  }

  login(event, email, password) {
    event.preventDefault();
    this.authservice.emailLogin(email, password).then(() => {
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }
}

 
