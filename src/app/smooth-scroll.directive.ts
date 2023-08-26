import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appSmoothScroll]",
})
export class SmoothScrollDirective {
  @Input() appSmoothScroll: string = "";
  scrollMarginTop: number = 50;

  constructor(private el: ElementRef) {}

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
  }
}
