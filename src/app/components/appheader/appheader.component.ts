import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'vm-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

constructor(public authservice: AuthService, private router: Router) {

    }
ngOnInit() {
    }
      logout() {
        this.authservice.logout();
    }
}
