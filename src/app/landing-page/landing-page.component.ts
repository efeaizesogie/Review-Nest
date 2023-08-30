import { Component, ElementRef, Renderer2 } from "@angular/core";
import { EventEmitter } from "@angular/core"; // Import EventEmitter

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent {
  loading: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
