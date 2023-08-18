import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { SvgComponent } from './svg/svg.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { CompanyComponent } from './company/company.component';
import { RecentReviewComponent } from './recent-review/recent-review.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewNowComponent } from './review-now/review-now.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent, SvgComponent, AboutUsComponent, WorkSectionComponent, CompanyComponent, RecentReviewComponent, ContactComponent, FooterComponent, ReviewNowComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
