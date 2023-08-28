import { Component, OnInit, Renderer2 } from "@angular/core";
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
  ActivatedRoute,
} from "@angular/router";
import { filter } from "rxjs/operators";
import { UserInputService } from "../user-input.service";
import { SharedService } from "../shared.service";
import { UserService } from "../user.service";
import { ProfileService } from "../profile.service";
import { Subscription } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  brandName: any;
  userInput$: any;
  selectedImageUrl: any;
  isDetailBoxActive: boolean = false;
  placeholderImageUrl = "./../../assets/dashboard/com img.svg";
  companyName: any;
  companyImageUrl: string = "";
  isLoading: boolean = true;
  loadingDurationMs: number = 2000;
  apiData: any;
  profileData: any;
  profileDataSubscription!: Subscription;

  private userID = localStorage.getItem("userID");
  private accessToken = localStorage.getItem("accessToken");
  private url = `https://reviewnest.onrender.com/api/v1/user/${this.userID}`;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private renderer: Renderer2,
    private userInputService: UserInputService,
    private sharedService: SharedService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.isLoading = true;

    this.userInputService.userInput$.subscribe((userInput) => {
      this.userInput$ = userInput;
      this.sharedService.isDetailBoxActive$.subscribe((isActive) => {
        this.isDetailBoxActive = isActive;
      });
      this.selectedImageUrl = localStorage.getItem("enteredImageUrl");
    });

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });

    this.profileService.get(this.url, headers).subscribe(
      (data) => {
        this.profileData = data.data;

        console.log(this.profileData);
        this.isLoading = false;
      },
      (error) => {
        console.error("Error fetching profile data:", error);
      }
    );

    // setTimeout(() => {
    //   this.isLoading = false;
    // }, this.loadingDurationMs);
  }

  showEditProfilePage() {
    const elementToDisplay = document.querySelector(".edit-wrapper");
    if (elementToDisplay) {
      this.renderer.setStyle(elementToDisplay, "display", "block");
      this.isDetailBoxActive = true;
    }
  }

  userInput = this.userInputService.userInput$;
}
