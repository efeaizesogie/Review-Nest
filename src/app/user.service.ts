import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private companyName: string = "";
  private logoutUrl = "https://reviewnest.onrender.com/api/v1/user/logout";

  setCompanyName(name: string): void {
    this.companyName = name;
    console.log("Company Name set to:", this.companyName);
    localStorage.setItem("dashboardName", this.companyName);
  }

  getCompanyName(): string {
    console.log("Getting Company Name:", this.companyName);
    return this.companyName;
  }

  constructor(private http: HttpClient) {}

  logout(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    });

    return this.http.post(this.logoutUrl, null, { headers });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("accessToken");
  }
}
