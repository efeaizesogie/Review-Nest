import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { UserInputService } from "../user-input.service";
import { SharedService } from "../shared.service";
import { HttpHeaders } from "@angular/common/http";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-dashboard-nav-right",
  templateUrl: "./dashboard-nav-right.component.html",
  styleUrls: ["./dashboard-nav-right.component.css"],
})
export class DashboardNavRightComponent implements OnInit {
  searchTerm: string = "";
  userInput$: any;
  selectedImageUrl: any;
  placeHolderImageUrl: string = "./../../assets/dashboard/com img.svg";
  search() {}
  companyName: string = "";

  profileData: any;

  private userID = localStorage.getItem("userID");
  private accessToken = localStorage.getItem("accessToken");
  private url = `https://reviewnest.onrender.com/api/v1/user/${this.userID}`;

  constructor(
    private userService: UserService,
    private userInputService: UserInputService,
    private sharedService: SharedService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.userInputService.userInput$.subscribe((userInput) => {
      this.userInput$ = userInput;
    });

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });

    this.profileService.get(this.url, headers).subscribe(
      (data) => {
        this.profileData = data.data;

        console.log(this.profileData);
      },
      (error) => {
        console.error("Error fetching profile data:", error);
      }
    );
  }
}
