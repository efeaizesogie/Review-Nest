import { Component, OnInit, Renderer2 } from "@angular/core";
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from "@angular/router";
import { filter } from "rxjs/operators";
import { UserInputService } from "../user-input.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  brandName: any;
  userInput$: any;

  constructor(
    private router: Router,
    private dataService: UserInputService,
    private renderer: Renderer2,
    private userInputService: UserInputService
  ) {}

  ngOnInit() {
    this.userInputService.userInput$.subscribe((userInput) => {
      this.userInput$ = userInput;
    });
  }

  showEditProfilePage() {
    const elementToDisplay = document.querySelector(".edit-wrapper");
    const darkBg = document.querySelector(".dashboard::before");
    if (elementToDisplay) {
      this.renderer.setStyle(elementToDisplay, "display", "block");
      this.renderer.setStyle(darkBg, "display", "block");
    }
  }

  userInput = this.dataService.userInput$;
}
