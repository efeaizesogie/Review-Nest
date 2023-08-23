import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  showEditProfilePage: boolean = false;

  apiData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Call the API when the component initializes
    this.http
      .get("https://reviewnest.onrender.com/api/v1/user")
      .subscribe((data) => {
        this.apiData = data;
        console.log(this.apiData);
      });
  }
}
