import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Component({
  selector: "app-form-creation",
  templateUrl: "./form-creation.component.html",
  styleUrls: ["./form-creation.component.css"],
})
export class FormCreationComponent {
  successMessageVisible: boolean = false;
  companyName: string | null = localStorage.getItem("companyName");
  feedbackForm: FormGroup;
  submitted: boolean = false;
  showOverlay: boolean = false;
  pRating: number = 0; // Initialize pRating
  isDetailBoxActive: boolean = false;
  loading: boolean = false;
  ratingGiven: boolean = false;


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
    this.ratingGiven = true;
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
    if (this.pRating === 0) {
      this.pRating = 0;
      console.log("Rating must be more than zero");
      return; // Do not proceed with submission
    }
    this.loading = true;
    const formID = localStorage.getItem("formID");
    const feedbackData = {
      email: feedbackDetails.pEmail,
      product: feedbackDetails.pProduct,
      rating: this.pRating.toString(),
      userName: feedbackDetails.pUserName,
      feedBack: feedbackDetails.pThoughts,
    };

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
          this.loading = false;
          this.pRating = 0;
          this.feedbackForm.reset();
        },
        (error: HttpErrorResponse) => {
          console.error("Error submitting review", error);

          setTimeout(() => {
            this.loading = false;
            this.successMessageVisible = true;

            setTimeout(() => {
              this.successMessageVisible = false;
            }, 3000);
          }, 2000);
        }
      );
  }
}
