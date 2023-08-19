import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

// below is for the object present in the api response
interface ApiResponse {
  message: string;
  success: boolean;
  token: string;
  user: {
    company_description: string;
    _id: string;
    email: string;
    company_name: string;
    reviews: any[];
  };
}

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent {
  loginError = false;
  loginSuccessful = false; // Added flag for successful login
  loginUnsuccessful = false;
  errorMessage = ""; // Store error message
  constructor(private http: HttpClient) {}

  onUsersLogin(loginDetails: { pEmail: string; pPassword: string }) {
    const userData = {
      email: loginDetails.pEmail,
      password: loginDetails.pPassword,
    };

    console.log(loginDetails);
    this.http
      .post<ApiResponse>(
        "https://reviewnest.onrender.com/api/v1/user/login",
        userData
      )
      .subscribe(
        (response) => {
          if (response.success === true) {
            console.log("User login successful:", response);
            this.loginSuccessful = true; // Set the flag to true
          }
        },
        (error: HttpErrorResponse) => {
          console.error("Error while logging in user:", error);
          this.errorMessage =
            "An error occurred while logging in. Please try again later.";
          console.error("Error while logging in user:", error);
        }
      );
  }
}
