import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-recent-review",
  templateUrl: "./recent-review.component.html",
  styleUrls: ["./recent-review.component.css"],
})
export class RecentReviewComponent implements AfterViewInit {
  @ViewChild("scrollSection") scrollSection!: ElementRef;

  ngAfterViewInit() {
    this.scrollSection.nativeElement.addEventListener(
      "animationiteration",
      () => {
        this.scrollSection.nativeElement.appendChild(
          this.scrollSection.nativeElement.firstElementChild
        );
      }
    );
  }
}
