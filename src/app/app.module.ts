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
import { SignUpLayoutComponent } from "./sign-up-layout/sign-up-layout.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DashboardNavComponent } from "./dashboard-nav/dashboard-nav.component";
import { LogoComponent } from "./logo/logo.component";
import { ReviewDashboardComponent } from "./review-dashboard/review-dashboard.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { FormCreationComponent } from "./form-creation/form-creation.component";
import { DashboardNavRightComponent } from "./dashboard-nav-right/dashboard-nav-right.component";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserService } from "./user.service";
import { SubmissionComponent } from './submission/submission.component';
import { ReviewService } from "./review.service";
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
    SignInComponent,
    SignUpComponent,
    LandingPageComponent,
    DashboardNavComponent,
    DashboardComponent,
    LogoComponent,
    ReviewDashboardComponent,
    DashboardComponent,
    ProfileComponent,
    FormCreationComponent,
    DashboardNavRightComponent,
    EditProfileComponent,
    SubmissionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [UserService, ReviewService],
  bootstrap: [AppComponent],
})
export class AppModule {}
