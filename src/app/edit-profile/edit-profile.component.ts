import {
  Component,
  NgModule,
  OnInit,
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
export class EditProfileComponent implements OnInit {
  showEditProfilePage: boolean = false;

  apiData: any;

  constructor(
    private http: HttpClient,
    private dataService: UserInputService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  goBack(): void {
    this.router.navigate(["../"], {
      relativeTo: this.route,
    });
  }

  onUpdateClicked(editForm: NgForm) {
    var formValues = editForm.value;
    this.showEditProfilePage = false;

    this.dataService.updateUserInput(formValues);

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
