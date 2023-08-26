import { Component, OnInit, Renderer2 } from "@angular/core";
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from "@angular/router";
import { filter } from "rxjs/operators";
import { UserInputService } from "../user-input.service";
import { SharedService } from "../shared.service";
import { UserService } from "../user.service";

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
  loadingDurationMs: number = 5000;

  constructor(
    private router: Router,
    private dataService: UserInputService,
    private renderer: Renderer2,
    private userInputService: UserInputService,
    private sharedService: SharedService,
    private userService: UserService
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

    this.companyName = this.userService.getCompanyName();
    console.log("Company Name:", this.companyName);

    this.selectedImageUrl = this.userInputService.getSelectedImageUrl();

    setTimeout(() => {
      this.isLoading = false;
    }, this.loadingDurationMs);
  }

  showEditProfilePage() {
    const elementToDisplay = document.querySelector(".edit-wrapper");
    if (elementToDisplay) {
      this.renderer.setStyle(elementToDisplay, "display", "block");
      this.isDetailBoxActive = true;
    }
  }

  userInput = this.dataService.userInput$;
}
