import { Component, Renderer2 } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { confirmPasswordValidator } from "../confirm-password.validator";

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;

    // Check for at least one letter
    const letterPattern = /[a-zA-Z]/;
    if (!letterPattern.test(password)) {
      return { noLetter: true };
    }

    // Check for at least one special character
    const specialCharPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    if (!specialCharPattern.test(password)) {
      return { noSpecialChar: true };
    }

    return null; // Validation passed
  };
}



@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent {

  // showPassword: boolean = false;
                                                // fpr show password
  // toggleShowPassword() {
  //   this.showPassword = !this.showPassword;
  // }
  usersForm: FormGroup = new FormGroup(
    {
      pPassword: new FormControl<string>("", [Validators.required]),
      pConfirmPassword: new FormControl<string>("", [Validators.required]),
    },
    {
      validators: confirmPasswordValidator,
    }
  );

  get pPasswordControl() {
    return this.usersForm.get('pPassword');
  }

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {
    this.usersForm = this.fb.group(
      {
        pName: ["", [Validators.required]],
        pEmail: ["", [Validators.required, Validators.email]],
        pPassword: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(5),
          passwordValidator(), // Add the custom validator here
        ]),
        pConfirmPassword: new FormControl<string>('', [Validators.required]),
      },
      {
        validators: confirmPasswordValidator,
      }
    );

    // this.pPasswordControl = this.usersForm.get('pPassword');
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
