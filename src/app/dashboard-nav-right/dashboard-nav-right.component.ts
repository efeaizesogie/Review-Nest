import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { UserInputService } from "../user-input.service";
import { SharedService } from "../shared.service";

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

  constructor(
    private userService: UserService,
    private userInputService: UserInputService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.companyName = this.userService.getCompanyName();
    console.log("Company Name:", this.companyName);

    this.userInputService.userInput$.subscribe((userInput) => {
      this.userInput$ = userInput;
    });

    this.selectedImageUrl = localStorage.getItem("enteredImageUrl");
  }
}
