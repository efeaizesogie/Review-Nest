import {
  Component,
  ElementRef,
  AfterViewInit,
  EventEmitter,
  Output,
  Renderer2,
} from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

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

  ngAfterViewInit(): void {
    // if (window.innerWidth < 980) {
    //   this.applyCollapseOnLinkClick();
    // }
  }

  // applyCollapseOnLinkClick() {
  //   const links = document.querySelectorAll(".link-items") as NodeListOf<
  //     HTMLAnchorElement
  //   >;

  //   links.forEach((link) => {
  //     link.addEventListener("click", function () {
  //       const navbarCollapse = document.querySelector(".navbar-collapse");
  //       if (navbarCollapse && navbarCollapse.classList.contains("show")) {
  //         navbarCollapse.classList.remove("show");
  //       }
  //     });
  //   });
  // }
}
