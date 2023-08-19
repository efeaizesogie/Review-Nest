import { Component, AfterViewInit, OnInit } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-recent-review",
  templateUrl: "./recent-review.component.html",
  styleUrls: ["./recent-review.component.css"],
})
export class RecentReviewComponent implements OnInit, AfterViewInit {
  swiper: Swiper | undefined;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper(): void {
    console.log("swipper init");
    this.swiper = new Swiper(".swiper", {
      speed: 300,
      autoplay: {
        delay: 0,
      },
      allowSlideNext: true,
      allowSlidePrev: true,
    });
  }
}
