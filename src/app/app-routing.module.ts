import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignUpLayoutComponent } from "./sign-up-layout/sign-up-layout.component";

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
    component: SignUpLayoutComponent, // Use SignUpLayoutComponent for sign-up route
    children: [
      { path: "", component: SignUpComponent }, // Actual sign-up component
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
