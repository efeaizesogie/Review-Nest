import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReviewService } from "../review.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-form-creation",
  templateUrl: "./form-creation.component.html",
  styleUrls: ["./form-creation.component.css"],
})
export class FormCreationComponent {
  companyName: string | null = localStorage.getItem("companyName");
  feedbackForm: FormGroup;
  submitted: boolean = false;
  showOverlay: boolean = false;
  pRating: number = 0; // Initialize pRating
  isDetailBoxActive: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.feedbackForm = this.fb.group({
      pEmail: ["", [Validators.required, Validators.email]],
      pUserName: ["", [Validators.required]],
      pProduct: ["", [Validators.required]],
      pThoughts: ["", [Validators.required]],
      pRating: [
        this.pRating,
        [Validators.required, Validators.min(1), Validators.max(5)],
      ],
    });
  }

  setRating(rating: number) {
    this.pRating = rating;
    // You can log the selected rating to verify that it's working
    console.log("Selected rating:", this.pRating);
  }

  closeSubmissionComponent() {
    this.submitted = false; // Close the submission component
    this.isDetailBoxActive = false;
  }
  onSubmit(feedbackDetails: {
    pEmail: string;
    pProduct: string;
    pRating: string;
    pUserName: string;
    pThoughts: string;
  }) {
    const formID = localStorage.getItem("formID");
    const feedbackData = {
      email: feedbackDetails.pEmail,
      product: feedbackDetails.pProduct,
      rating: this.pRating.toString(),
      userName: feedbackDetails.pUserName,
      feedBack: feedbackDetails.pThoughts,
    };

    if (this.feedbackForm) {
      // Check if the form exists
      const pRatingControl = this.feedbackForm.get("pRating");
      if (pRatingControl) {
        // Check if the pRating form control exists
        pRatingControl.setValue(feedbackDetails.pRating); // Set the value
        rating: this.pRating.toString();
      }
    }
    console.log(feedbackData);
    console.log(formID);
    this.http
      .post(
        `https://reviewnest.onrender.com/api/v1/reviews/create/${formID}`,
        feedbackData
      )
      .subscribe(
        (response) => {
          console.log(response, "feedback submitted");
          this.submitted = true;
          this.showOverlay = true;
          this.isDetailBoxActive = true;
        },
        (error: HttpErrorResponse) => {
          console.error("Error submitting review", error);
        }
      );
  }
}