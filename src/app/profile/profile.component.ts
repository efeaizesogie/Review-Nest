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

  constructor(
    private router: Router,
    private dataService: UserInputService,
    private renderer: Renderer2,
    private userInputService: UserInputService,
    private sharedService: SharedService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userInputService.userInput$.subscribe((userInput) => {
      this.userInput$ = userInput;
      this.sharedService.isDetailBoxActive$.subscribe((isActive) => {
        this.isDetailBoxActive = isActive;
      });
    });

    this.companyName = this.userService.getCompanyName();
    console.log("Company Name:", this.companyName);

    this.selectedImageUrl = this.userInputService.getSelectedImageUrl();
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
