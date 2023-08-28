import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private profileDataSubject = new BehaviorSubject<any>(null);
  profileData$ = this.profileDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  patch(url: string, data: any, headers: any): Observable<any> {
    return this.http.patch(url, data, { headers });
  }

  get(url: string, headers: any): Observable<any> {
    return this.http.get(url, { headers });
  }

  updateData(updatedData: any) {
    this.profileDataSubject.next(updatedData);
  }

  getUpdatedProfileData() {
    return this.profileDataSubject.value;
  }
}
