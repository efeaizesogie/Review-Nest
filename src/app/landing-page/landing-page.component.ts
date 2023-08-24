import { Component, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent {
  scrollToSectionEvent: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.scrollToSectionEvent.subscribe((sectionId: string) => {
      const targetSection = this.el.nativeElement.querySelector(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
