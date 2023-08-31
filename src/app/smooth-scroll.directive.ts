import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appSmoothScroll]",
})
export class SmoothScrollDirective {
  @Input() appSmoothScroll: string = "";

  scrollMarginTop: number = 50;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("click", ["$event"])
  onClick(event: Event) {
    event.preventDefault();
    const target = document.getElementById(this.appSmoothScroll);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - this.scrollMarginTop,
        behavior: "smooth",
      });
    }
    this.toggleMobileNavCollapse();
  }

  private toggleMobileNavCollapse() {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse) {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      } else {
        navbarCollapse.classList.add("show");
      }
    }
  }
}
