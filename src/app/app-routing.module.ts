import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { FormCreationComponent } from "./form-creation/form-creation.component";
import { BusinessProfileComponent } from "./business-profile/business-profile.component";
import { ReviewDashboardComponent } from "./review-dashboard/review-dashboard.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing-page",
    pathMatch: "full",
  },
  {
    path: "landing-page",
    component: AppComponent,
  },
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  {
    path: "dashboard-home",
    component: DashboardComponent,
  },

  {
    path: "form-creation",
    component: FormCreationComponent,
  },
  {
    path: "profile",
    component: BusinessProfileComponent,
  },
  {
    path: "review",
    component: ReviewDashboardComponent,
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
