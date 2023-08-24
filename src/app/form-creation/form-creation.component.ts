import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../review.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.css']
})


export class FormCreationComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.feedbackForm = this.fb.group({
      pEmail: ['', [Validators.required, Validators.email]],
      pUserName: ['', [Validators.required]],
      pProduct: ['', [Validators.required]],
      pThoughts: ['', [Validators.required]],
      pRating: [0, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
    console.log('hettttt')
  } 
  onSubmit(feedbackDetails: { pEmail:string, pProduct:string, pRating:string, pUserName:string, pThoughts:string} ) {
    const userID = localStorage.getItem('userID');
      const feedbackData = {
        email: feedbackDetails.pEmail,
        product: feedbackDetails.pProduct,
        rating: feedbackDetails.pRating,
        userName: feedbackDetails.pUserName,
        feedBack: feedbackDetails.pThoughts
      };
      console.log(feedbackData);
      console.log(userID)
    this.http.post(`https://reviewnest.onrender.com/api/v1/reviews/create/${userID}`, feedbackData)
    .subscribe(
      (response) =>{
        console.log(response, "feedback submitted")
      },
      (error:HttpErrorResponse) =>{
        console.error('Error submitting review', error)
      }
    )
    
  }
}

