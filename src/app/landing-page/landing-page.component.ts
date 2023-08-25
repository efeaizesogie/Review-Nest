import { Component, ElementRef, Renderer2 } from "@angular/core";
import { EventEmitter } from "@angular/core"; // Import EventEmitter

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent {
  // Declare scrollToSectionEvent as an EventEmitter
  scrollToSectionEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Subscribe to the scrollToSectionEvent
    this.scrollToSectionEvent.subscribe((sectionId: string) => {
      const targetSection = this.el.nativeElement.querySelector(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
