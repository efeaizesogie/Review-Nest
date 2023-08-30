import { Component, OnInit, Renderer2 } from "@angular/core";
import { ReviewService } from "../review.service";

@Component({
  selector: "app-recent-review",
  templateUrl: "./recent-review.component.html",
  styleUrls: ["./recent-review.component.css"],
})
export class RecentReviewComponent implements OnInit {
  reviews: any;
  totalReviews: any;
  loading: boolean = true;

  constructor(
    private reviewService: ReviewService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const loadingScreen = document.querySelector(".spinner-item");
    this.reviewService.getReviewsWithoutId().subscribe(
      (response) => {
        this.reviews = response.Reviews;
        this.totalReviews = this.reviews.length;
        console.log(this.reviews);
        this.loading = false;
        this.renderer.setStyle(loadingScreen, "display", "none");
      },
      (error) => {
        console.error(error);
        this.loading = false;
        this.renderer.setStyle(loadingScreen, "display", "none");
      }
    );
  }
}
