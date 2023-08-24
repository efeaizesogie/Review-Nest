import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard-nav-right',
  templateUrl: './dashboard-nav-right.component.html',
  styleUrls: ['./dashboard-nav-right.component.css'],
})
export class DashboardNavRightComponent implements OnInit {
  searchTerm: string = "";  
  search() {}
  companyName: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.companyName = this.userService.getCompanyName();
    console.log('Company Name:', this.companyName);  
  }
    
}
