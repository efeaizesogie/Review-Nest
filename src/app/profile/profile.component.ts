import { Component } from "@angular/core";
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
export class ProfileComponent {
  showEditProfilePage: boolean = false;
  brandName: any;

  constructor(private router: Router, private dataService: UserInputService) {
    this.router.events
      .pipe(
        filter(
          (event: NavigationEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.showEditProfilePage = event.urlAfterRedirects === "/edit-profile";
      });
  }

  userInput$ = this.dataService.userInput$;
}
