import {
  Component,
  ElementRef,
  AfterViewInit,
  EventEmitter,
  Output,
  Renderer2,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  accessToken: any;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.accessToken = localStorage.getItem("accessToken");
  }

  navigateToSignUp() {
    const anchor = this.renderer.createElement("a");
    anchor.href = "./../sign-up/sign-up.component.html";
    anchor.click();
  }

  scrollToSection(sectionId: string) {
    const element = this.renderer.selectRootElement(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  ngAfterViewInit(): void {}
}
