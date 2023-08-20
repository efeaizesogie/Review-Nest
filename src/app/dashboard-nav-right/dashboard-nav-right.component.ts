import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard-nav-right",
  templateUrl: "./dashboard-nav-right.component.html",
  styleUrls: ["./dashboard-nav-right.component.css"],
})
export class DashboardNavRightComponent {
  searchTerm: string = "";

  search() {}
}
