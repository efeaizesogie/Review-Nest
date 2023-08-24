import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; 

interface ApiResponse {
  data: {
    company_description: string;
    company_name: string;
    email: string;
  };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    const userId = localStorage.getItem('userID');

    if (userId) {
      this.http
        .get<ApiResponse>(
          `https://reviewnest.onrender.com/api/v1/user/${userId}`
        )
        .subscribe(
          (response) => {
            // Update the company name in the service
            console.log('API Response:', response);
            this.userService.setCompanyName(response.data.company_name);
            // console.log(response.data.company_name)
          },
          (error) => {
            console.error('Error fetching user data:', error);
          }
        );
    } else {
      console.error('userId not found in local storage');
    }
  }
}
