import { Component, OnInit, Renderer2 } from "@angular/core";
import { ReviewService } from "../review.service";

@Component({
  selector: "app-review-dashboard",
  templateUrl: "./review-dashboard.component.html",
  styleUrls: ["./review-dashboard.component.css"],
})
export class ReviewDashboardComponent implements OnInit {
  reviews: any;
  totalReviews: any;
  selectedReview: any | null = null;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  isDetailBoxActive: boolean = false;
  loading: boolean = true;

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return this.startIndex + this.itemsPerPage;
  }

  constructor(
    private reviewService: ReviewService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const loadingScreen = document.querySelector(".spinner-item");
    console.log(this.loading);

    this.reviewService.getReviews().subscribe(
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

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.totalReviews / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= Math.ceil(this.totalReviews / this.itemsPerPage)) {
      this.currentPage = page;
    }
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.totalReviews / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  closePage() {
    const elementToHide = document.querySelector(".details");
    const darkBg = document.querySelector(".dashboard::before");
    if (elementToHide) {
      this.renderer.setStyle(elementToHide, "display", "block");
      this.renderer.setStyle(darkBg, "display", "block");
    }
  }
  showDetails(review: any) {
    this.selectedReview = review;
    this.reviews.forEach((r: any) => (r.showDetails = false)); // Close other details
    review.showDetails = true;
    this.isDetailBoxActive = true;
  }

  closeDetails() {
    this.selectedReview = null;
    this.reviews.forEach((r: any) => (r.showDetails = false));
    this.isDetailBoxActive = false;
  }
}
