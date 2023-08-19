import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SignInComponent } from "./sign-in/sign-in.component";


const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "landing-page",
  //   pathMatch: "full",
  // },
  // {
  //   path: "landing-page",
  //   component: AppComponent,
  // },
  {
    path: "landing-page",
    component: LandingPageComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent,  
  },
  {
    path: "sign-in",
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
