import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/_services/auth.service';
@Component({
  moduleId:module.id,
  selector: 'vm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

displayName;
photoUrl;
  
constructor(private authservice: AuthService){
  this.displayName = authservice.userDetails.displayName;
  this.photoUrl=authservice.userDetails.photoURL;
}
  
  ngOnInit() {
    
  }

}
