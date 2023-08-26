import { Component, Renderer2 } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { confirmPasswordValidator } from "../confirm-password.validator";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent {
  usersForm: FormGroup = new FormGroup(
    {
      pPassword: new FormControl<string>("", [Validators.required]),
      pConfirmPassword: new FormControl<string>("", [Validators.required]),
    },
    {
      validators: confirmPasswordValidator,
    }
  );

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {
    this.usersForm = this.fb.group(
      {
        pName: ["", [Validators.required]],
        pEmail: ["", [Validators.required, Validators.email]],
        pPassword: ["", [Validators.required]],
        pConfirmPassword: ["", [Validators.required]],
      },
      {
        validators: confirmPasswordValidator,
      }
    );
  }

  onUsersCreate(userDetails: {
    pName: string;
    pEmail: string;
    pPassword: string;
  }) {
    const loadingScreen = document.querySelector(".loading-container");
    this.renderer.setStyle(loadingScreen, "display", "flex");
    const userData = {
      company_name: userDetails.pName,
      email: userDetails.pEmail,
      password: userDetails.pPassword,
    };

    console.log(userDetails);
    this.http
      .post("https://reviewnest.onrender.com/api/v1/user/register", userData)
      .subscribe(
        (response) => {
          console.log("User registration successful:", response);
          alert("Your account has been successfully created");
          // this.router.navigate(['/sign-in']);
          this.renderer.setStyle(loadingScreen, "display", "none");
        },
        (error: HttpErrorResponse) => {
          console.error("Error while registering user:", error);
          alert("Please fill out all the fields properly");
          this.renderer.setStyle(loadingScreen, "display", "none");
        }
      );
  }
}
