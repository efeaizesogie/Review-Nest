import { Component, Renderer2 } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) {}

  navigateToSignUp() {
    const anchor = this.renderer.createElement("a");
    anchor.href = "./../sign-up/sign-up.component.html"; // Update with the correct URL
    anchor.click();
  }
}
