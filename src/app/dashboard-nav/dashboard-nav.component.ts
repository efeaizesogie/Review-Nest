import { Component } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-nav",
  templateUrl: "./dashboard-nav.component.html",
  styleUrls: ["./dashboard-nav.component.css"],
})
export class DashboardNavComponent {
  activeLink: string = "dashboard";

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logout().subscribe(
      (res) => {
        console.log(res);
        localStorage.removeItem("accessToken");

        this.router
          .navigateByUrl("'sign-in'", { skipLocationChange: true })
          .then(() => {
            this.router.navigate(["'sign-in'"]);
          });
      },
      (error) => {
        console.error("Logout error:", error);
      }
    );
  }
}
