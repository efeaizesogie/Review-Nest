import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  fullName: string = "";
  email: string = "";
  message: string = "";
  contactForm: FormGroup;
  formSubmitted = false;
  messageSent = false;
  successMessageVisible = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid && !this.loading) {
      this.loading = true;

      console.log("Form submitted");
      console.log("Full Name:", this.contactForm.get("fullName")?.value);
      console.log("Email:", this.contactForm.get("email")?.value);
      console.log("Message:", this.contactForm.get("message")?.value);

      this.contactForm.reset();
      this.formSubmitted = false;

      setTimeout(() => {
        this.loading = false;
        this.successMessageVisible = true;

        setTimeout(() => {
          this.successMessageVisible = false;
        }, 3000);
      }, 1000);
    } else {
      this.markFormGroupAsTouched(this.contactForm);
    }
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
