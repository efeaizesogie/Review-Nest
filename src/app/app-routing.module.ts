import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { FormCreationComponent } from "./form-creation/form-creation.component";
import { ReviewDashboardComponent } from "./review-dashboard/review-dashboard.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";
import { SubmissionComponent } from "./submission/submission.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "LandingPageComponent",
    pathMatch: "full",
  },
  {
    path: "landing-page",
    component: LandingPageComponent,
  },
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "form-creation",
    component: FormCreationComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "review",
    component: ReviewDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "edit-profile",
    component: EditProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "success",
    component: SubmissionComponent,
  },
  { path: "form-creation/:companyId", component: FormCreationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
