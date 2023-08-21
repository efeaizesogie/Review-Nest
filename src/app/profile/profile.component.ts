import { Component } from "@angular/core";
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  showEditProfilePage: boolean = false;

  constructor(private router: Router) {
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
}
