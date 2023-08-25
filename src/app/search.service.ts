import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this.http.get<any>("https://reviewnest.onrender.com/api/v1/user");
  }
}
