import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { HttpHeaders } from "@angular/common/http";

interface ApiResponse {
  data: {
    company_description: string;
    company_name: string;
    email: string;
  };
}

interface ReviewsApiResponse {
  data: {
    success: boolean;
    message: string;
    reviews: any[]; // Adjust the type accordingly based on the actual structure
  };
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  totalReviews: number = 0;
  percentage1: number = 0;
  percentage2: number = 0;
  percentage3: number = 0;
  percentage4: number = 0;
  percentage5: number = 0;
  isLoading: boolean = true;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    const userId = localStorage.getItem("userID");
    const accessToken = localStorage.getItem("accessToken");
    this.isLoading = true;

    if (userId) {
      this.http
        .get<ApiResponse>(
          `https://reviewnest.onrender.com/api/v1/user/${userId}`
        )
        .subscribe(
          (response) => {
            // Update the company name in the service
            console.log("API Response:", response);
            this.userService.setCompanyName(response.data.company_name);
            // console.log(response.data.company_name)
            this.isLoading = false;
          },
          (error) => {
            console.error("Error fetching user data:", error);
            this.isLoading = false;
          }
        );
    } else {
      console.error("userId not found in local storage");
      this.isLoading = false;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    this.http
      .get<ReviewsApiResponse>(
        `https://reviewnest.onrender.com/api/v1/user/${userId}`,
        { headers: headers } // Replace with the actual API URL
      )
      .subscribe(
        (reviewsResponse) => {
          console.log("Reviews API Response:", reviewsResponse);
          const reviews = reviewsResponse.data.reviews;
          this.totalReviews = reviewsResponse.data.reviews.length;
          console.log("Total Reviews:", this.totalReviews);

          reviews.forEach((review) => {
            const rating = review.rating;
            console.log("Rating:", rating);
            // You can further process or display the ratings here
          });
          // Initialize variables to store counts
          let count1 = 0;
          let count2 = 0;
          let count3 = 0;
          let count4 = 0;
          let count5 = 0;

          // Loop through reviews and count occurrences of each rating
          reviews.forEach((review) => {
            const rating = review.rating;
            switch (rating) {
              case 1:
                count1++;
                break;
              case 2:
                count2++;
                break;
              case 3:
                count3++;
                break;
              case 4:
                count4++;
                break;
              case 5:
                count5++;
                break;
            }
          });

          console.log("Count of 1:", count1);
          console.log("Count of 2:", count2);
          console.log("Count of 3:", count3);
          console.log("Count of 4:", count4);
          console.log("Count of 5:", count5);

          const totalReviews = reviews.length;
          const percentage1 = (count1 / totalReviews) * 100;
          const percentage2 = (count2 / totalReviews) * 100;
          const percentage3 = (count3 / totalReviews) * 100;
          const percentage4 = (count4 / totalReviews) * 100;
          const percentage5 = (count5 / totalReviews) * 100;

          console.log("Percentage of 1:", percentage1);
          console.log("Percentage of 2:", percentage2);
          console.log("Percentage of 3:", percentage3);
          console.log("Percentage of 4:", percentage4);
          console.log("Percentage of 5:", percentage5);

          // Set these percentages to variables for use in your template
          this.percentage1 = percentage1;
          this.percentage2 = percentage2;
          this.percentage3 = percentage3;
          this.percentage4 = percentage4;
          this.percentage5 = percentage5;

          localStorage.setItem("Percentage1", this.percentage1.toString());
          localStorage.setItem("Percentage2", this.percentage2.toString());
          localStorage.setItem("Percentage3", this.percentage3.toString());
          localStorage.setItem("Percentage4", this.percentage4.toString());
          localStorage.setItem("Percentage5", this.percentage5.toString());
        },
        (error) => {
          console.error("Error fetching reviews data:", error);
        }
      );
  }
}
