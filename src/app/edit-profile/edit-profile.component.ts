import {
  Component,
  ElementRef,
  NgModule,
  OnInit,
  Renderer2,
  importProvidersFrom,
} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormsModule, NgForm } from "@angular/forms";
import { UserInputService } from "../user-input.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent {
  showEditProfilePage: boolean = false;

  apiData: any;
  userInput$: any;

  constructor(
    private http: HttpClient,
    private dataService: UserInputService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private userInputService: UserInputService
  ) {}

  hideElement(): void {
    const elementToHide = document.querySelector(".edit-wrapper");
    if (elementToHide) {
      this.renderer.setStyle(elementToHide, "display", "none");
    }
  }

  onUpdateClicked(editForm: NgForm) {
    var formValues = editForm.value;
    this.userInputService.updateUserInput(formValues);

    const elementToHide = document.querySelector(".edit-wrapper");
    if (elementToHide) {
      this.renderer.setStyle(elementToHide, "display", "none");
    }
    console.log(formValues);

    const headers = new HttpHeaders({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.NjRkZTAwYTg3YmUzZWI5ZDVhYzgzMjI4.2Un6mWrki4l1hGtK8HoFqInCKGoLnT25L94gdmQ4Q4M",
    });
    this.http
      .patch(
        "https://reviewnest.onrender.com/api/v1/user/64dffbb9aaeffa4bb4765feb?=eyJhbGciOiJIUzI1NiJ9.NjRkZTVlODRiNjQwMjdlNzAxYmZlZTFm.bhSNr6S0j6ub1TXPG6Iu95KvQiLmWh_rpALNdycnbS0/profile.json",
        formValues,
        { headers: headers }
      )
      .subscribe((res) => {
        this.apiData = res;
        console.log(this.apiData);
      });
  }
}
