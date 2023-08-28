import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, Renderer2 } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

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
export class SignInComponent implements OnInit {
  loginError = false;
  loginSuccessful = false;
  loginUnsuccessful = false;
  errorMessage = "";
  formSubmitted = false;
  loginForm: FormGroup;
  loading: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  clearEmailError() {
    this.loginForm.controls?.["email"].setErrors(null);
  }

  clearPasswordError() {
    this.loginForm.controls?.["password"].setErrors(null);
  }

  ngOnInit(): void {}

  onUsersLogin(loginDetails: { pEmail: string; pPassword: string }) {
    this.formSubmitted = true;
    this.loading = true;
    const userData = {
      email: loginDetails.pEmail,
      password: loginDetails.pPassword,
    };
    const loadingScreen = document.querySelector(".loading-container");
    // this.renderer.setStyle(loadingScreen, "display", "flex");

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
            this.loginSuccessful = true; //
            this.router.navigate(["/dashboard"]);
            localStorage.setItem("userID", response.user._id);
            localStorage.setItem("accessToken", response.token);
            console.log("access token: ", response.token);
            console.log(response.user._id);

            // this.renderer.setStyle(loadingScreen, "display", "none");
            this.loading = false;
          }
        },
        (error: HttpErrorResponse) => {
          console.error("Error while logging in user:", error);
          this.errorMessage =
            "An error occurred while logging in. Please try again later.";
          console.error("Error while logging in user:", error);
          // this.renderer.setStyle(loadingScreen, "display", "none");
          this.loading = false;
        }
      );
  }
}
