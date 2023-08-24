import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient) { }

  submitReview(reviewData: any): Observable<any> {
    const userID = localStorage.getItem('userID'); // Retrieve user ID here
    const apiUrlWithUserID = `https://reviewnest.onrender.com/api/v1/reviews/create/${userID}`;
    console.log('hello')

    console.log(this.http.post(apiUrlWithUserID, reviewData));
    return this.http.post(apiUrlWithUserID, reviewData);
  }
}
