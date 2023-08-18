import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ContactComponent } from "./contact/contact.component";
import { CompanyComponent } from "./company/company.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { WorkSectionComponent } from "./work-section/work-section.component";
import { SvgComponent } from "./svg/svg.component";
import { ReviewNowComponent } from "./review-now/review-now.component";
import { RecentReviewComponent } from "./recent-review/recent-review.component";
import { SignUpLayoutComponent } from './sign-up-layout/sign-up-layout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    ContactComponent,
    CompanyComponent,
    AboutUsComponent,
    WorkSectionComponent,
    SvgComponent,
    ReviewNowComponent,
    RecentReviewComponent,
    SignUpLayoutComponent,
    SignInComponent
  ],
  imports: [BrowserModule, AppRoutingModule,
    FormsModule,
    HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
