export class MobileNavControl {
  private static collapsed = false;

  static toggleCollapse() {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse) {
      if (this.collapsed) {
        navbarCollapse.classList.remove("show");
      } else {
        navbarCollapse.classList.add("show");
      }
      this.collapsed = !this.collapsed;
    }
  }
}
